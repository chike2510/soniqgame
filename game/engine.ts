import { GameState } from "@/types/game";

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

function updateArtists(artists: any[]) {
  return artists.map(a => ({
    ...a,
    mood: clamp(a.mood + rand(-5, 5), 0, 100),
    popularity: clamp(a.popularity - 0.2, 0, 100)
  }));
}

function updateProjects(projects: any[], artists: any[]) {
  return projects.map(p => {
    if (p.released) return p;

    const artist = artists.find(a => a.id === p.artistId);

    const speed =
      artist.workEthic * 0.3 +
      artist.mood * 0.2 +
      p.budget / 10000;

    return {
      ...p,
      progress: clamp(p.progress + speed * 0.1, 0, 100)
    };
  });
}

function simulateRelease(project: any, artist: any) {
  const quality =
    artist.talent * 0.5 +
    artist.mood * 0.2 +
    project.budget / 1000 +
    rand(-10, 10);

  let streams = quality * 1000 + project.marketing * 500;

  const viral = Math.random() < 0.05;

  if (viral) streams *= rand(5, 15);

  return {
    streams,
    revenue: streams * 0.005,
    fans: streams * 0.01
  };
}

export function nextWeek(state: GameState): GameState {
  const artists = updateArtists(state.artists);
  const projects = updateProjects(state.projects, artists);

  let cash = state.cash;
  let fans = state.fans;

  const updatedProjects = projects.map(p => {
    if (p.progress >= 100 && !p.released) {
      const artist = artists.find(a => a.id === p.artistId);
      const result = simulateRelease(p, artist);

      cash += result.revenue;
      fans += result.fans;

      return { ...p, released: true };
    }
    return p;
  });

  return {
    ...state,
    artists,
    projects: updatedProjects,
    cash,
    fans,
    week: state.week + 1
  };
}

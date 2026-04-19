export function ArtistCard({ artist }) {
  return (
    <div className="min-w-[200px] bg-zinc-900 p-3 rounded-xl">
      <h3>{artist.name}</h3>
      <p>Talent: {artist.talent}</p>
      <p>Popularity: {artist.popularity}</p>
    </div>
  );
}

export interface Artist {
  id: string;
  name: string;
  talent: number;
  popularity: number;
  workEthic: number;
  mood: number;
  fanbase: number;
}

export interface Project {
  id: string;
  artistId: string;
  name: string;
  progress: number;
  budget: number;
  marketing: number;
  released: boolean;
}

export interface GameState {
  cash: number;
  fans: number;
  week: number;
  artists: Artist[];
  projects: Project[];
}

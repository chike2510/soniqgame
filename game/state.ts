import { GameState } from "@/types/game";

export const defaultState: GameState = {
  cash: 100000,
  fans: 1000,
  week: 1,
  artists: [
    {
      id: "1",
      name: "Luna Sky",
      talent: 80,
      popularity: 60,
      workEthic: 75,
      mood: 80,
      fanbase: 5000
    }
  ],
  projects: [
    {
      id: "p1",
      artistId: "1",
      name: "First Single",
      progress: 0,
      budget: 20000,
      marketing: 50,
      released: false
    }
  ]
};

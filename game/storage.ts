import { GameState } from "../types/game";

const KEY = "soniq-save";

export function saveGame(state: GameState) {
  if (typeof window !== "undefined") {
    localStorage.setItem(KEY, JSON.stringify(state));
  }
}

export function loadGame(): GameState | null {
  if (typeof window === "undefined") {
    return null;
  }
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : null;
}

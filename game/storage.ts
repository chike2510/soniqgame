import { GameState } from "../types/game";

const KEY = "soniq-save";

export function saveGame(state: GameState) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function loadGame(): GameState | null {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : null;
}

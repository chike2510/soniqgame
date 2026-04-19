"use client";

import { useState, useEffect } from "react";
import { GameState } from "@/types/game";
import { nextWeek } from "./engine";
import { saveGame, loadGame } from "./storage";
import { defaultState } from "./state";

export function useGame() {
  const [state, setState] = useState<GameState>(
    loadGame() || defaultState
  );

  function advanceWeek() {
    setState(prev => nextWeek(prev));
  }

  useEffect(() => {
    saveGame(state);
  }, [state]);

  return { state, advanceWeek };
}

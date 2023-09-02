import { GAME } from "../../types";

export const cashTime = 300000;

export interface LocalStorageGame {
  data: GAME;
  time: number;
}

interface LocalStorageGames {
  cashedGames: LocalStorageGame[]
  currentCashGame: GAME | null
  cashed: boolean
}

export const useLocalStorageGames = (gameId:string| undefined):LocalStorageGames => {
  const cashedGames: LocalStorageGame[] = JSON.parse(localStorage.getItem("cashedGames") || "[]");
  const cachedGameIndex: number | -1 = cashedGames.length!== 0 && gameId ? cashedGames.findIndex((game) => game.data.id === +gameId) : -1;
  const currentCashGame: GAME | null = cachedGameIndex !== -1 ? cashedGames[cachedGameIndex].data : null;
  const cashed = Boolean(!currentCashGame || Date.now() - cashedGames[cachedGameIndex].time >= cashTime)
  return {cashedGames, currentCashGame, cashed}
}

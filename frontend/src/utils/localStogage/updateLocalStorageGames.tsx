import { LocalStorageGame } from "./useLocalStorageGames";
import { GAME } from "../../types";

export function updateLocalStorageGames(
  cashedGames: LocalStorageGame[],
  gameId: string,
  currentCashGame: GAME
) {
  const updatedGames: LocalStorageGame[] = [...cashedGames];
  if (!updatedGames.some((game) => game.data.id === +gameId)) {
    updatedGames.push({ data: currentCashGame, time: Date.now() });
  }
  localStorage.setItem("cashedGames", JSON.stringify(updatedGames));
}

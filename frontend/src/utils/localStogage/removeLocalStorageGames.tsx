import { LocalStorageGame, cashTime } from "./useLocalStorageGames";

export function removeLocalStorageGames() {
  const nowTime = Date.now();
  const cashedGames: LocalStorageGame[] = JSON.parse(
    localStorage.getItem("cashedGames") || "[]"
  );
  if (cashedGames.length > 0) {
    const updatedGames = cashedGames.filter(
      (game) => nowTime - game.time < cashTime
    );
    localStorage.setItem("cashedGames", JSON.stringify(updatedGames));
  }
}

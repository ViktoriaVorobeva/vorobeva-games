export enum GameActionType {
  LOADING = "LOADING",
  GET_GAMES = "GET_GAMES",
  GET_GAME = "GET_GAME",
  FILTER_GAMES = "FILTER_GAMES",
  ERROR = "ERROR",
}

export interface Parametres {
  platform?: string
  category?: string
  "sort-by"?: string
}

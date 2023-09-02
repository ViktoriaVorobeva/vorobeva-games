import { GAME } from "../types";
import { AnyAction } from "redux";
import { GameActionType } from "./types";

export type GameStore = {
  games: GAME[];
  currentGame?: GAME;
  loading: boolean;
  error: boolean;
};

const initialState: GameStore = {
  games: [],
  currentGame: undefined,
  loading: false,
  error: false,
};

export const gameReducer = (
  state = initialState,
  action: AnyAction
): GameStore => {
  switch (action.type) {
    case GameActionType.LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GameActionType.GET_GAMES:
      return {
        ...state,
        games: action.payload,
        loading: false,
        error: false,
      };
      case GameActionType.FILTER_GAMES:
        return {
          ...state,
          games: action.payload,
          loading: false,
          error: false,
        };
    case GameActionType.GET_GAME:
      return {
        ...state,
        currentGame: action.payload,
        loading: false,
        error: false,
      };
    case GameActionType.ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

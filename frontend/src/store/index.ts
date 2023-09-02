import { createStore, applyMiddleware, AnyAction } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { gameReducer, GameStore } from "./reducer";

export const store = createStore(
  gameReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof gameReducer>;

export type AppDispatch = ThunkDispatch<GameStore, unknown, AnyAction>;

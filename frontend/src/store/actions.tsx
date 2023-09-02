import { Dispatch } from "redux";
import axios from "axios";
import { GameActionType, Parametres } from "./types";

export enum API_ROUTES {
  GAMES = "http://localhost:3000/api/games",
  GAME = "http://localhost:3000/api/game",
}

export const getGames = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GameActionType.LOADING });

    axios
      .get(`${API_ROUTES.GAMES}`)
      .then((response) => {
        dispatch({
          type: GameActionType.GET_GAMES,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        dispatch({ type: GameActionType.ERROR });
        console.log(error);
      });
  };
};

export const sortGames = (platform?: string, category?: string, sortByby?: string) => {
  const result: Parametres = {
    platform: '',
    category: '',
    'sort-by': sortByby
  };
  if (platform !== 'All Platforms') {
    result.platform = platform;
  } else {
    delete result.platform;
  }
  if (category !== 'All Genres') {
    result.category = category;
  } else {
    delete result.category;
  }
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: result,
    headers: {
      'X-RapidAPI-Key': '4736ff8bf7msh06eefac3772f610p1e3736jsn0349916bdaac',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  return (dispatch: Dispatch) => {
    dispatch({ type: GameActionType.LOADING });
    axios
      .get(options.url, options)
      .then((response) => {
        dispatch({
          type: GameActionType.FILTER_GAMES,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: GameActionType.ERROR });
        console.log(error);
      });
  };
};

export const getGame = (gameId: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GameActionType.LOADING });

    axios
      .get(`${API_ROUTES.GAME}/${gameId}`)
      .then((response) => {
        dispatch({
          type: GameActionType.GET_GAME,
          payload: response.data.data.gameInformation,
        });
      })
      .catch((error) => {
        dispatch({ type: GameActionType.ERROR });
        console.log(error);
      });
  };
};

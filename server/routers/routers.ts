import express from "express";
import { BACKEND_ROUTES } from "../constants";
import { getGameByIdController, getGamesController, getFilterGamesController } from "../controllers/gamesController";

const gamesRouter = express.Router();

/**
 * GET Список игр 
 */
gamesRouter.get(BACKEND_ROUTES.GAMES, getGamesController);

// /**
//  * GET Фильтр игр 
//  */
gamesRouter.get(BACKEND_ROUTES.SORT, getFilterGamesController);

/**
 * GET Игра
 */
gamesRouter.get(BACKEND_ROUTES.GAME, getGameByIdController)



export default gamesRouter;
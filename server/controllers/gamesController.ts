import { Request, Response } from "express";
import { getGames, getGameById, getFilterGames } from "../api";
import { Game } from "../types";

export const getGamesController = async (req: Request, res: Response) => {
    const data: Game[] = await getGames();

    res.json({ data });
};

export const getFilterGamesController = async (req: Request, res: Response) => {
    const platform = req.params.platform || 'all';
    const category = req.params.category || '';
    const sortBy = req.params.sort || 'relevance';
    const data: Game[] = await getFilterGames(platform, category, sortBy);
    res.json({ data });
};

export const getGameByIdController = async (req: Request, res: Response) => {
    const gameId = Number(req.params.id);
    if (!gameId) {
        res.send({ data: "Please enter id" });
    }

    const gameInformation = await getGameById(gameId);

    const data = { gameInformation };

    res.json({ data });
};
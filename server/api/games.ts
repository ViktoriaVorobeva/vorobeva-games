import axios from "axios";
import { Game } from "../types";
import { GAMES_API_BASE_URL} from "./constants";
import { isResponseSuccess } from "./utils";

/**
 *
 *
 * @returns Promise<Game[]>
 */
export const getGames = async (): Promise<Game[]> => {
    const url = `${GAMES_API_BASE_URL}/games`;
    const response = await axios.get(url);
    if (isResponseSuccess(response) && Array.isArray(response.data)) {
        return response.data;
    }
    return [];
};

/**
 *
 * @param platform
 * @returns Promise<Game[]>
 */

export const getFilterGames = async (platform:string, category: string, sortBy: string): Promise<Game[]> => {
    const url = `${GAMES_API_BASE_URL}/games?${platform && `platform=${platform}`}${category && `&category=${category}`}${sortBy && `&sort-by=${sortBy}`}`;
    const response = await axios.get(url);
    if (isResponseSuccess(response) && Array.isArray(response.data)) {
        return response.data;
    }
    return [];
};

/**
 *
 * @param gameID
 * @returns
 */
export const getGameById = async (gameID: number): Promise<Game | null> => {
    const url = `${GAMES_API_BASE_URL}/game?id=${gameID}`;
    const response = await axios.get(url);

    if (isResponseSuccess(response)) {
        return response.data;
    }

    return null;
};
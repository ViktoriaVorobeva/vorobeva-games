import { AxiosResponse } from "axios";

/**
 * Проверка запроса на успешность
 * @param response
 * @returns boolean
 */
export const isResponseSuccess = (response: AxiosResponse): boolean => {
    return response.status == 200 && response.data;
};
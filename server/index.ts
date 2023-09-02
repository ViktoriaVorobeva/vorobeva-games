import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import gamesRouter from "./routers/routers";
import { API_PREFIX } from "./constants";
import cors from "cors";

dotenv.config();

export const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin: "http://localhost:3001",
    })
);

app.use(API_PREFIX, gamesRouter);

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`);
});


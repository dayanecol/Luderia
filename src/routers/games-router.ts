import { Router } from "express";
import { authenticateToken } from "src/middlewares";
import { getAllGames, getAllAvailableGames } from "src/controllers";

const gamesRouter = Router();
// gamesRouter.all("/*", authenticateToken);
gamesRouter.get("/", getAllGames);
gamesRouter.get("/available", getAllAvailableGames);

export { gamesRouter };

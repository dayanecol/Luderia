import { Request, Response } from "express";
import gameService from "src/services/games-service";
import httpStatus from "http-status";

export async function getAllGames(req: Request, res: Response) {
  try {
    const games = await gameService.getAllGames();
    return res.status(httpStatus.OK).send(games);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getAllAvailableGames(req: Request, res: Response) {
  try {
    const games = await gameService.getAllAvailableGames();
    return res.status(httpStatus.OK).send(games);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

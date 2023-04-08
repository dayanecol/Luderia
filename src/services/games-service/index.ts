import gameRepository from "src/repositories/game-repository";
import { Game } from "@prisma/client";

export async function getAllGames(): Promise<Game[]> {
  const games = await gameRepository.findManyGames();
  return games;
}

export async function getAllAvailableGames(): Promise<Game[]> {
  const games = await gameRepository.findManyAvailableGames();
  return games;
}

const gameService = {
  getAllGames,
  getAllAvailableGames,
};

export * from "./error";
export default gameService;

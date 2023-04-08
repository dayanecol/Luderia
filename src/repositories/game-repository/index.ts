import { prisma } from "src/config";

async function findManyGames() {
  return prisma.game.findMany();
}

async function findManyAvailableGames() {
  return prisma.game.findMany({
    where: {
      quantity: {
        gt: 0,
      },
    },
  });
}

const gameRepository = {
  findManyGames,
  findManyAvailableGames,
};

export default gameRepository;

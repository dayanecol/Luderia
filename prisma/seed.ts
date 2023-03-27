import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const games = [
    {
      title: "Settlers of Catan",
      description:
        "A popular board game where players compete to build settlements and cities on the island of Catan.",
      price: 29.99,
      quantity: 5,
    },
    {
      title: "Ticket to Ride",
      description:
        "A cross-country train adventure game where players collect cards of various types of train cars and use them to claim railway routes connecting cities.",
      price: 24.99,
      quantity: 4,
    },
    {
      title: "Pandemic",
      description:
        "A cooperative game where players work together to stop the spread of deadly diseases across the world.",
      price: 34.99,
      quantity: 3,
    },
    {
      title: "Codenames",
      description:
        "A party game where players work in teams to guess words based on single-word clues provided by their teammates.",
      price: 19.99,
      quantity: 6,
    },
  ];

  for (const game of games) {
    await prisma.game.create({
      data: game,
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

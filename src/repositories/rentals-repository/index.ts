import { prisma } from "src/config";
import { Prisma } from "@prisma/client";

async function findManyRentals() {
  return prisma.rental.findMany();
}

async function findRentalById(id: number) {
  return prisma.rental.findUnique({
    where: { id },
  });
}

async function create(data: Prisma.RentalCreateInput) {
  return prisma.rental.create({
    data,
  });
}

async function update(id: number, data: Prisma.RentalUpdateInput) {
  return prisma.rental.update({
    where: { id },
    data,
  });
}

//TODO- DELETE

const rentalsRepository = {
  findManyRentals,
  findRentalById,
  create,
  update,
};

export default rentalsRepository;

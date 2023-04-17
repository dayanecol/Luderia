import { Rental, Prisma } from "@prisma/client";
import rentalsRepository from "src/repositories/rentals-repository";

async function getAllRentals(): Promise<Rental[]> {
  const rentals = await rentalsRepository.findManyRentals();
  return rentals;
}

async function getRentalById(id: number): Promise<Rental | null> {
  const rental = await rentalsRepository.findRentalById(id);
  return rental;
}

async function createRental(data: Prisma.RentalCreateInput): Promise<Rental> {
  const rental = await rentalsRepository.create(data);
  return rental;
}

async function updateRental(
  id: number,
  data: Prisma.RentalUpdateInput
): Promise<Rental> {
  const rental = await rentalsRepository.update(id, data);
  return rental;
}

async function deleteRental(id: number): Promise<void> {
  //TODO implementar a logica de deletar
}

const rentalsService = {
  getAllRentals,
  getRentalById,
  createRental,
  updateRental,
  deleteRental,
};

export default rentalsService;

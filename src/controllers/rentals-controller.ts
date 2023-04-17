import { Request, Response } from "express";
import httpStatus from "http-status";
import rentalService from "../services/rentals-service";
import { Prisma } from "@prisma/client";

export async function getAllRentals(req: Request, res: Response) {
  try {
    const rentals = await rentalService.getAllRentals();
    return res.status(httpStatus.OK).send(rentals);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getRentalById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const rental = await rentalService.getRentalById(Number(id));
    return res.status(httpStatus.OK).send(rental);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function createRental(req: Request, res: Response) {
  try {
    const rental: Prisma.RentalCreateInput = req.body;
    const newRental = await rentalService.createRental(rental);
    return res.status(httpStatus.CREATED).send(newRental);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function updateRental(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const rental: Prisma.RentalUpdateInput = req.body;
    const updatedRental = await rentalService.updateRental(Number(id), rental);
    return res.status(httpStatus.OK).send(updatedRental);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function deleteRental(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await rentalService.deleteRental(Number(id));
    return res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

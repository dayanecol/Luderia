import { authenticateToken } from "src/middlewares";
import {
  getAllRentals,
  getRentalById,
  createRental,
  updateRental,
  deleteRental,
} from "src/controllers/rentals-controller";
import { Router } from "express";
const rentalsRouter = Router();

// rentalsRouter.all("/*", authenticateToken);
rentalsRouter.get("/", getAllRentals);
rentalsRouter.get("/:id", getRentalById);
rentalsRouter.post("/", createRental);
rentalsRouter.put("/:id", updateRental);
rentalsRouter.delete("/:id", deleteRental);

export { rentalsRouter };

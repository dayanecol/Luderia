import { Router } from "express";
const rentalsRouter = Router();

rentalsRouter.get("/");
rentalsRouter.get("/:id");
rentalsRouter.post("/");
rentalsRouter.put("/:id");
rentalsRouter.delete("/:id");

export { rentalsRouter };

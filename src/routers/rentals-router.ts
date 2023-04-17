import { authenticateToken } from "src/middlewares";

import { Router } from "express";
const rentalsRouter = Router();

// rentalsRouter.all("/*", authenticateToken);
rentalsRouter.get("/");
rentalsRouter.get("/:id");
rentalsRouter.post("/");
rentalsRouter.put("/:id");
rentalsRouter.delete("/:id");

export { rentalsRouter };

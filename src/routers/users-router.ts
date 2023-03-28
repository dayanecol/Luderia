import { Router } from "express";
import { createUserSchema } from "src/schemas";
import { validateBody } from "src/middlewares";
import { usersPost, getUsers } from "src/controllers";

const usersRouter = Router();

usersRouter.post("/", validateBody(createUserSchema), usersPost);
usersRouter.get("/", getUsers);

export { usersRouter };

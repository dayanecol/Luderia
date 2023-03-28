import { validateBody } from "src/middlewares/index";
import { signInSchema } from "src/schemas";
import { signInPost } from "src/controllers";

import { Router } from "express";
const authenticationRouter = Router();

authenticationRouter.post("/sign-in", validateBody(signInSchema), signInPost);

export { authenticationRouter };

import "express-async-errors";
import express, {
  json,
  Request,
  Response,
  NextFunction,
  Express,
} from "express";
import cors from "cors";
import {
  usersRouter,
  authenticationRouter,
  gamesRouter,
  rentalsRouter,
} from "./routers";

import { loadEnv, connectDb, disconnectDB } from "./config";

loadEnv();
const app = express();
app.use(cors());
app.use(json());
app
  .get("/health", (req: Request, res: Response) => res.send("I'am alive!"))
  .use("/users", usersRouter)
  .use("/auth", authenticationRouter)
  .use("/games", gamesRouter)
  .use("/rentals", rentalsRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;

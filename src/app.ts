import "express-async-errors";
import express, {
  json,
  Request,
  Response,
  NextFunction,
  Express,
} from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
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
//app.use(morgan("tiny"));

//app.use(helmet());

// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.send("Hello World");
// });

// app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
//   res.status(500).send(error.message);
// });

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

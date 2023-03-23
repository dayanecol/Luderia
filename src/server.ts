import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const PORT = parseInt(`${process.env.PORT || 4000}`);

import app from "./app";
app.listen(PORT, async () =>
  console.log(chalk.bgBlack.whiteBright.bold(`Server is running at ${PORT}.`))
);

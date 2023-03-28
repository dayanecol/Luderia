import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const PORT = parseInt(`${process.env.PORT || 4000}`);

import app, { init } from "./app";

init().then(() => {
  app.listen(PORT, async () =>
    console.log(chalk.bgBlack.whiteBright.bold(`Server is running at ${PORT}.`))
  );
});

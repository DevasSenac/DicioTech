import app from "./src/app.js";
import chalk from 'chalk';

const port = 8080;

app.listen(port, () => {
  console.log(chalk.magenta.bgMagenta.bold(`O Servidor está rodando na porta, ${port}`));
});

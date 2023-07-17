import app from "./src/app.js";
import chalk from 'chalk';

const port = 4000;

app.listen(port, () => {
  console.log(chalk.magenta.bgMagenta.bold(`O Servidor está rodando na porta, ${port}`));
});

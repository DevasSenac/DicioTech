import app from './src/app.js';
import chalk from 'chalk';
import 'dotenv/config';

const port = process.env.PORT;

app.listen(port, () => {
  console.log(chalk.magenta.bgMagenta.bold(`O Servidor está rodando na porta, ${port}`));
});

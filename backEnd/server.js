import app from "./src/app.js";

const port = 4000;

app.listen(port, () => {
  console.log(`O Servidor está rodando na porta, ${port}`);
});

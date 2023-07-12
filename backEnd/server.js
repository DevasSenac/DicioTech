import app from "./src/app.js";

const port = 8080;

app.listen(port, () => {
  console.log(`O Servidor está rodando na porta, ${port}`);
});

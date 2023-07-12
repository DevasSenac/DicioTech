import express, { json } from "express"; //importando o express
import index from "./routes/index.js";
import db from "./config/dbConnect.js";
import termos from "./routes/termo.js";

const app = express(); // esta variável recebe o express, e será usada em outros arquivos

app.use(json()); //framework utilizado em formato de json
app.use("/", index); //caminho para o index
app.use("/termos", termos);

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

export default app; //exportando o app.js

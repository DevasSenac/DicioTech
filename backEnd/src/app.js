import express, { json } from "express"; //importando o express
import index from "./routes/index.js";
import db from "./config/dbConnect.js";
import termos from "./routes/termo.js";

const app = express();

app.use(json());
app.use("/", index);
app.use("/termos", termos);

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

export default app;

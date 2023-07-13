import mongoose from "mongoose";

const termoScheema = new mongoose.Schema({
  inicial: { type: String },
  termo: { type: String},
  traducao: { type: String },
  significado: { type: String},
  categoria: { type: String}
});

const termos = mongoose.model("termos", termoScheema);

export default termos;

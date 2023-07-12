import mongoose from "mongoose";

const termoScheema = new mongoose.Schema({
  termo: { type: String, required: true },
  significado: { type: String, required: true },
  traducao: { type: String },
  inicial: { type: String, required: true },
  categoria: { type: String, required: true }
});

const termos = mongoose.model("termos", termoScheema);

export default termos;

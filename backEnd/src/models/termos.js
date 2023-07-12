import mongoose from "mongoose";

const termoScheema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
});

const termos = mongoose.model("termos", termoScheema);

export default termos;

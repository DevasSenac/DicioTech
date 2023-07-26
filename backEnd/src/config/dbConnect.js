// import { mongoose } from "mongoose";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://user:delis123@cluster0.5ogdpir.mongodb.net/DicioTech"
);

let db = mongoose.connection;

export default db;

// adicionar no postiman esse Diciotech

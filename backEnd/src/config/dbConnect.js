import { mongoose } from "mongoose";
import 'dotenv/config';

mongoose.connect(
  process.env.URLMONGO
);

let db = mongoose.connection;

export default db;

// adicionar no postiman esse Diciotech

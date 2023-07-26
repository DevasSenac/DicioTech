// import { mongoose } from 'mongoose';
import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
  process.env.URL_MONGO
);

let db = mongoose.connection;

export default db;

// adicionar no postiman esse Diciotech

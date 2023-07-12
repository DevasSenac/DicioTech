import express from "express";
import TermoController from "../controllers/termoControllers.js";

const router = express.Router();

router
  .get("/", TermoController.getAllTermos)
  .post("/", TermoController.createTermos)
  .put("/:id", TermoController.updateTermos)
  .delete("/:id", TermoController.deleteTermos)
  .get("/:id", TermoController.getByIdTermos);

export default router;

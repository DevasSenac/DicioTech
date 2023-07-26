import express from 'express';
import TermoController from '../controllers/termoControllers.js';

const router = express.Router();

router
.get('/', TermoController.getAllTermos)
.post('/', TermoController.createTermos)
.put('/:id', TermoController.updateTermos)
.delete('/:id', TermoController.deleteTermos)
.delete('/', TermoController.deleteAllTermos)
.get('/:id', TermoController.getByIdTermos)
.get('/categoria/:categoria', TermoController.getByCategoriaTermos)
.get('/inicial/:inicial', TermoController.getByInicialTermos)

export default router;
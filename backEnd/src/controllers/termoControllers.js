import termos from "../models/termos.js";

class TermoController {
  static getAllTermo = (req, res) => {
    termos.find((err, termos) => {
      res.status(200).json(termos);
    });
  };

  static createTermos = (req, res) => {
    let termo = new termos(req.body);

    termo.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar Termo` });
      } else {
        res.status(201).send(termo.toJSON());
      }
    });
  };

  static getAllTermos = (req, res) => {
    termos.find((err, termos) => {
      res.status(200).json(termos);
    });
  };

  static getByIdTermos = (req, res) => {
    const id = req.params.id;

    termos.findById(id, (err, termos) => {
      if (err) {
        res
          .status(400)
          .send({ mensage: `${err.message} - Id do Termo não localizado` });
      } else {
        res.status(200).send(termos);
      }
    });
  };

  static getByInicialTermos = (req, res) => {
    const inicial = req.params.inicial;

    termos.find(
      { termo: { $regex: `^${inicial}`, $options: "i" } },
      (err, termos) => {
        if (err) {
          res
            .status(400)
            .send({
              message: `${err.message} - Não há termos com essa inicial.`,
            });
        } else {
          res.status(200).json(termos);
        }
      }
    );
  };


  static getByCategoriaTermos = (req, res) => {
    let categoria = req.params.categoria;

    termos.find({ categoria: categoria }, (err, termos) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Erro ao buscar termos por Categoria.` });
      } else {
        res.status(200).json(termos);
      }
    });
  };

 
  static updateTermos = (req, res) => {
    const id = req.params.id;

    termos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Termo atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteTermos = (req, res) => {
    const id = req.params.id;

    termos.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Termo removido com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteAllTermos = async (req, res) => {
    try {
      await termos.deleteMany({});
      res.status(200).send({ message: "Todos os termos foram removidos com sucesso" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
}

export default TermoController;

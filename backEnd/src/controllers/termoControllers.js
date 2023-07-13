import termos from "../models/termos.js";

class TermoController {
  static getAllTermo = (req, res) => {
    termos.find((err, termos) => {
      res.status(200).json(termos);
    });
  };

  static createTermo = (req, res) => {
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

  static getAllTermo = (req, res) => {
    termos.find((err, termos) => {
      res.status(200).json(termos);
    });
  };

  static getByIdTermo = (req, res) => {
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

  
  static getByInicialTermo = (req, res) => {
    const inicial = req.params.inicial;
  
    termos.findOne({ inicial: inicial }, (err, termo) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Erro ao buscar o termo do usuário` });
      } else if (!termo) {
        res.status(404).send({ message: `Termo do usuário não encontrado` });
      } else {
        res.status(200).send(termo);
      }
    });
  };

  static updateTermo = (req, res) => {
    const id = req.params.id;

    termos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Termo atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteTermo = (req, res) => {
    const id = req.params.id;

    termos.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Termo removido com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default TermoController;

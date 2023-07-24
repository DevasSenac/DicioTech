import Router from "express";

const router = Router();

router.get("/", function (req, res) {
  // res.status(200).send({
  //   title: "Projeto DicioTech",
  //   version: "1.0.0",
  // });

  // GET all Termos
  router.get("/", async (req, res) => {
    try {
      const termos = await Termo.find();
      res.json(termos);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // POST a new task
  router.post("/", async (req, res) => {
    const termo = new Termo({
      significado: req.body.significado,
    });

    try {
      const newTermo = await termo.save();
      res.status(201).json(newTermo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
});

export default router;

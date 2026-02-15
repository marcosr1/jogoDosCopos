import express from "express";
import { criarJogo, jogar} from "./gameManager.js"

const router = express.Router();

router.post("/novoJogo", async (req, res) => {
  const id = await criarJogo();
  res.json({ gameId: id, copos: [1, 2, 3] });
});

router.post("/jogar/:id", async (req, res) => {
  const { copo } = req.body;

  const resultado = await jogar(req.params.id, copo);

  res.json(resultado);
});

export default router;
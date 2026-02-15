import express from "express";
import routes from "./src/routes.js";

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3000, () =>
  console.log("🎮 Jogo dos Copos rodando na porta 3000")
);

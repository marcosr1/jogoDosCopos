const games = {};

export async function criarJogo() {
  const id = Math.random().toString(36).substring(2, 9);
  games[id] = {
    copoCorreto: Math.floor(Math.random() * 3) + 1,
    tentativas: 2,
    ativo: true
  };
  return id;
}

export async function jogar(id, copo) {
  const jogo = games[id];
  if (!jogo || !jogo.ativo) return { erro: "Jogo inválido" };

  jogo.tentativas--;

  if (copo === jogo.copoCorreto) {
    jogo.ativo = false;
    return { resultado: "🎉 Acertou!" };
  }

  if (jogo.tentativas <= 0) {
    jogo.ativo = false;
    return { resultado: "Perdeu!", copoCorreto: jogo.copoCorreto };
  }

  return { resultado: "Errou 😬", tentativasRestantes: jogo.tentativas };
}

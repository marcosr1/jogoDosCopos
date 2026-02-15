# 🎮 Jogo dos Copos – Backend API

API backend de um jogo simples onde uma bolinha é escondida em um dos copos e o jogador precisa adivinhar qual é o copo correto.
Projeto desenvolvido exclusivamente no backend, com foco em lógica de jogo e boas práticas de APIs REST.

# 📌 Sobre o Projeto

O Jogo dos Copos é uma API REST que gerencia partidas independentes de um jogo de adivinhação.

---

## Funcionalidades:

* Criação de partidas
* Geração aleatória do copo correto
* Validação de jogadas
* Controle de tentativas
* Retorno de vitória ou derrota

---

## 🚀 Tecnologias

* Node.js
* Express
* APIs REST
* Lógica de jogos
* Gerenciamento de estado no backend

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* Express
* JavaScript
* API REST

---

## 📂 Estrutura do Projeto

```
jogo-copos/
├─ src/
│  ├─ routes.js        # Rotas da API
│  └─ gameManager.js   # Lógica do jogo
├─ package.json
├─ README.md
└─server.js        # Inicialização do servidor
```

## 🚀 Como Executar o Projeto

Pré-requisitos
Node.js (versão 16 ou superior)
npm

## Instalação
git clone https://github.com/seu-usuario/jogoDosCopos.git
cd jogoDosCopos
npm install

Executar
node src/server.js


Servidor disponível em:
```bash
http://localhost:3000
```

🎯 Endpoints da API
➕ Criar novo jogo

POST `/novoJogo`

Resposta:
```json
{
  "gameId": "abc123",
  "copos": [1, 2, 3]
}
```

## 🎲 Fazer uma jogada

POST `/jogar/:id`

Body (JSON):
```json
{
  "copo": 2
}
```

## Respostas possíveis:

✅ Acertou
```json
{ "resultado": "🎉 Acertou!" }
```

❌ Errou (com tentativas restantes)
```json
{ "resultado": "Errou 😬", "tentativasRestantes": 1 }
```

❌ Perdeu
```json
{ "resultado": "❌ Perdeu!", "copoCorreto": 3 }
```

⚠️ Erro
```json
{ "erro": "Jogo inválido ou finalizado" }
```
## 🧠 Regras do Jogo

* Existem 3 copos numerados (1, 2 e 3)
* O jogador possui 2 tentativas
* O copo correto é definido aleatoriamente pelo backend
* A partida termina ao acertar ou ao esgotar as tentativas

## 📚 Objetivo do Projeto

* Projeto criado para fins educacionais e portfólio, com foco em:
* organização de código
* lógica de backend
* criação de APIs REST
* controle de estado

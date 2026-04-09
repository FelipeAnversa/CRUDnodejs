# CRUDnodejs

Uma API simples e funcional construída com **Node.js**, **Express** e **SQLite** para realizar operações de CRUD (Create, Read, Update, Delete) em registros de pessoas.

## 🚀 Tecnologias Utilizadas

  * **Node.js**: Ambiente de execução JavaScript no servidor.
  * **Express**: Framework web minimalista para Node.js.
  * **SQLite**: Banco de dados leve e embarcado.
  * **Nodemon**: Ferramenta de desenvolvimento para reiniciar o servidor automaticamente.

## 📋 Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## ⚙️ Como Instalar e Executar

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/FelipeAnversa/CRUDnodejs.git
    cd CRUDnodejs
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Inicie o projeto em modo de desenvolvimento:**

    ```bash
    npm run start:dev
    ```

    *A API estará rodando em `http://localhost:3000`.*

## 📌 Rotas da API

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/` | Verifica se a API está rodando. |
| `GET` | `/persons` | Lista todas as pessoas cadastradas. |
| `GET` | `/person` | Busca uma pessoa específica (requer `id` no corpo). |
| `POST` | `/person` | Adiciona uma nova pessoa. |
| `PUT` | `/person` | Atualiza os dados de uma pessoa existente. |
| `DELETE` | `/person` | Remove uma pessoa do banco de dados. |

## 🛠️ Como contribuir

1.  Faça um *fork* do projeto.
2.  Crie uma nova *branch* (`git checkout -b feature/minha-feature`).
3.  Faça o *commit* das suas alterações (`git commit -m 'Adicionando minha feature'`).
4.  Envie para o seu repositório (*push* `git push origin feature/minha-feature`).
5.  Abra um *Pull Request*.

## 📄 Licença

Este projeto está licenciado sob a licença **MIT** - veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.
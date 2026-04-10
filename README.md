# CRUD & Auth API com Node.js

Uma API robusta construída com **Node.js**, **Express** e **SQLite**. O projeto evoluiu de um CRUD simples para um sistema de gerenciamento de usuários com segurança criptográfica para armazenamento de senhas.

## 🚀 Tecnologias e Segurança

* **Node.js**: Ambiente de execução JavaScript.
* **Express**: Framework para rotas e middlewares.
* **SQLite**: Banco de dados relacional leve.
* **bcrypt**: Biblioteca para hashing de senhas (segurança contra vazamentos).
* **Nodemon**: Reinicialização automática do servidor durante o desenvolvimento.

## 📋 Pré-requisitos

* [Node.js](https://nodejs.org/) instalado.
* Conhecimento básico em ferramentas como Postman ou Insomnia para testes.

## ⚙️ Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/FelipeAnversa/CRUDnodejs.git
    cd CRUDnodejs
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor:**
    ```bash
    npm run start:dev
    ```
    *Servidor disponível em `http://localhost:3000`.*

## 📌 Rotas da API (Endpoints)

Agora a API foca no recurso `User` e possui lógica de autenticação:

| Método | Rota | Descrição | Body (JSON) |
| :--- | :--- | :--- | :--- |
| `GET` | `/users` | Lista todos os usuários (IDs e Logins). | N/A |
| `POST` | `/user` | **Criação de Conta**: Salva senha com hash. | `{ "login": "...", "password": "..." }` |
| `POST` | `/login` | **Autenticação**: Compara hashes e valida acesso. | `{ "login": "...", "password": "..." }` |
| `PUT` | `/user` | Atualiza login ou senha de um usuário. | `{ "id": 1, "login": "...", "password": "..." }` |
| `DELETE` | `/user` | Remove um usuário por ID. | `{ "id": 1 }` |

## 🔒 Destaques de Segurança Implementados

* **Hashing de Senhas**: Uso de `bcrypt` com 10 salt rounds. Nunca salvamos senhas em texto puro.
* **SQL Injection Prevention**: Utilização de *prepared statements* (parâmetros `?`) em todas as queries.
* **Unique Constraint**: Tratamento de erro para impedir logins duplicados.
* **Validação de Resposta**: Respostas de login genéricas para evitar enumeração de usuários por atacantes.

## 📄 Licença

Este projeto está sob a licença **MIT**.
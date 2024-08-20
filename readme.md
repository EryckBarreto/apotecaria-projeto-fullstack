# Apotecaria - Projeto FullStack

Bem-vindo ao repositório do projeto Apotecaria, que combina uma **API de Usuários** construída com Express.js e MongoDB com um **site responsivo** desenvolvido com HTML, CSS e JavaScript. Este projeto faz parte do desafio do Desenvolve - Grupo Boticário e tem como objetivo demonstrar habilidades tanto no desenvolvimento de backend quanto no design e interatividade do frontend.


![Captura de tela 2024-06-01 213653](https://github.com/EryckBarreto/apotecaria/assets/126429105/a577ac38-04d5-42d2-a66b-6cecd4b2eef8)

## 🛠️ Tecnologias Utilizadas

### Backend
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/mongodb-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/mongoose-%23880000.svg?style=for-the-badge&logo=mongoose&logoColor=white) ![bcrypt](https://img.shields.io/badge/bcrypt-%23333333.svg?style=for-the-badge&logo=bcrypt&logoColor=white) ![dotenv](https://img.shields.io/badge/dotenv-%23404d59.svg?style=for-the-badge&logo=dotenv&logoColor=%2361DAFB) ![CORS](https://img.shields.io/badge/CORS-%23404d59.svg?style=for-the-badge&logo=cors&logoColor=%2361DAFB) ![Body-parser](https://img.shields.io/badge/Body-parser-%23404d59.svg?style=for-the-badge&logo=bodyparser&logoColor=%2361DAFB)

### Frontend
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 🚀 Funcionalidades

### Backend
* **Cadastro de Usuário**: Endpoint para cadastrar novos usuários com validação de dados.
* **Autenticação**: Implementação de hashing de senhas utilizando bcrypt.
* **Validação de Dados**: Utilização de middleware express-validator para garantir a conformidade dos dados recebidos.
* **Conexão com MongoDB**: Configuração e conexão segura com o banco de dados MongoDB.

### Frontend
* **Design Responsivo**: O site é otimizado para visualização em diferentes dispositivos, incluindo desktops, tablets e smartphones.
* **Elementos Interativos**: Botões de navegação, menus dropdown e carrossel de imagens interativos.
* **Manipulação do DOM**: JavaScript é utilizado para manipulação dinâmica dos elementos do DOM, proporcionando uma experiência aprimorada ao usuário.

## 📚 Estrutura do Projeto

```sh
📁 src
 ┣ 📂 api
 ┃ ┣ 📜 index.js      
 ┃ ┣ 📜 userController.js  
 ┣ 📂 loaders
 ┃ ┣ 📜 express.js     
 ┃ ┣ 📜 mongoose.js 
 ┣ 📂 middlewares
 ┃ ┣ 📜 validators.js      
 ┣ 📂 models
 ┃ ┣ 📜 user.js      
 ┣ 📂 services
 ┃ ┣ 📜 userService.js      
 ┣ 📜 app.js
```
## Backend

### 1. Clone o repositório
```sh
git clone https://github.com/EryckBarreto/apotecaria-backend
cd apotecaria-backend
```

### 2. Instale as dependências

```sh
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```sh
PORT=3000
DATABASE_URI=mongodb://localhost:27017/nome-do-banco
```
### 4. Inicie o servidor
```
npm start
Acesse a API via http://localhost:3000/api
```
## Frontend

### 1. Clone o repositório
```sh
git clone https://github.com/EryckBarreto/apotecaria-frontend
cd apotecaria-frontend
```
Abra o arquivo index.html no seu navegador.

## Deploy

O site está disponível para visualização no seguinte link: [Apotecaria - Deploy](https://apotecaria.vercel.app/)

## 🔍 Testando Endpoints (Backend)
Use ferramentas como Postman ou Insomnia para testar os endpoints da API. Exemplo:
```sh
POST /api/signup: Cadastra um novo usuário
```

## 🛡️ Segurança (Backend)
As senhas dos usuários são armazenadas de forma segura utilizando bcrypt.
Validação rigorosa dos dados de entrada com express-validator.

## 📄 Licença
Este projeto está licenciado sob a MIT License, permitindo que você utilize, modifique e distribua o código conforme desejar, desde que mantenha a atribuição da licença.

## 📫 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias.
```sh
Esse README unificado cobre tanto o backend quanto o frontend do projeto Apotecaria, permitindo uma fácil visualizaçã


   

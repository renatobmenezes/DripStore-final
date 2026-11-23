# 👟 DripStore — Backend

> API REST para gerenciamento de um e-commerce, desenvolvida com Node.js e Express.js, utilizando arquitetura MSC (Model-Service-Controller), Prisma ORM e PostgreSQL.

---

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-0C344B?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

</div>

---

## 📑 Navegação

- [📌 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🏗️ Arquitetura MSC](#️-arquitetura-msc)
- [📂 Estrutura de Pastas](#-estrutura-de-pastas)
- [⚙️ Configuração do Ambiente](#️-configuração-do-ambiente)
- [🗄️ Banco de Dados](#️-banco-de-dados)
- [🚀 Executando o Projeto](#-executando-o-projeto)
- [🔗 Endpoints da API](#-endpoints-da-api)
- [🔐 Autenticação](#-autenticação)
- [📚 Aprendizados](#-aprendizados)
- [👨‍💻 Autores](#-autores)

---

## 📌 Sobre o Projeto

O backend do **DripStore** é responsável pelo gerenciamento das informações e regras de negócio da plataforma de e-commerce.

A aplicação foi desenvolvida utilizando Node.js e Express.js, com integração ao banco de dados PostgreSQL por meio do Prisma ORM.

A organização segue o padrão MSC (Model-Service-Controller), promovendo a separação de responsabilidades e facilitando a manutenção e evolução do código.

## ✨ Funcionalidades

### 👤 Gerenciamento de usuários

- Cadastro de usuários.
- Consulta de usuários por ID.
- Atualização de usuários.
- Exclusão de usuários.

### 🏷️ Gerenciamento de categorias

- Listagem de categorias.
- Consulta de categoria por ID.
- Cadastro de categorias.
- Atualização de categorias.
- Exclusão de categorias.

### 📦 Gerenciamento de produtos

- Listagem de produtos.
- Consulta de produto por ID.
- Cadastro de produtos.
- Atualização de produtos.
- Exclusão de produtos.

### 🔐 Autenticação e segurança

- Login de usuários.
- Geração de tokens JWT.
- Middleware para validação de tokens.
- Criptografia de senhas utilizando Bcrypt.
- Proteção de rotas autenticadas.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função                                 |
| ---------- | -------------------------------------- |
| Node.js    | Ambiente de execução JavaScript        |
| Express.js | Framework para construção da API       |
| PostgreSQL | Banco de dados relacional              |
| Prisma ORM | Comunicação com o banco de dados       |
| NeonDB     | Hospedagem do PostgreSQL               |
| JWT        | Autenticação baseada em tokens         |
| Bcrypt     | Criptografia de senhas                 |
| Dotenv     | Gerenciamento de variáveis de ambiente |
| Nodemon    | Reinicialização automática do servidor |
| Insomnia   | Testes de endpoints                    |

## 🏗️ Arquitetura MSC

O backend utiliza o padrão MSC, separando as responsabilidades da aplicação.

```text
┌────────────────────────────┐
│           Routes           │
│     Gerenciamento HTTP     │
└──────────────┬─────────────┘
               │
               ▼
┌────────────────────────────┐
│        Controller          │
│  Recebe e responde requests│
└──────────────┬─────────────┘
               │
               ▼
┌────────────────────────────┐
│          Service           │
│      Regras de negócio     │
└──────────────┬─────────────┘
               │
               ▼
┌────────────────────────────┐
│      Prisma ORM / Model    │
│    Acesso ao banco de dados│
└──────────────┬─────────────┘
               │
               ▼
┌────────────────────────────┐
│         PostgreSQL         │
└────────────────────────────┘
```

### Responsabilidades

- **Routes:** definem os caminhos e métodos HTTP da API.
- **Controllers:** recebem as requisições e organizam as respostas.
- **Services:** concentram as regras de negócio.
- **Prisma:** realiza a comunicação com o banco de dados.
- **Middlewares:** executam validações e verificações antes das rotas.

## 📂 Estrutura de Pastas

```text
backend/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── config/
│   │   └── prisma.js
│   ├── controllers/
│   │   ├── AuthController.js
│   │   ├── UserController.js
│   │   ├── CategoryController.js
│   │   └── ProductController.js
│   ├── middlewares/
│   │   └── AuthMiddleware.js
│   ├── routes/
│   │   └── index.js
│   └── services/
│       ├── CategoryService.js
│       └── ProductService.js
├── app.js
├── server.js
├── package.json
└── .env
```

_Estrutura de referência baseada nos arquivos apresentados durante o desenvolvimento._

## ⚙️ Configuração do Ambiente

### 1. Clonar o repositório

```bash
git clone https://github.com/renatobmenezes/DripStore-final
```

### 2. Acessar a pasta do backend

```bash
cd DripStore/backend
```

### 3. Instalar as dependências

```bash
npm install
```

## 🗄️ Banco de Dados

O projeto utiliza PostgreSQL hospedado na plataforma NeonDB, com Prisma ORM para gerenciamento e manipulação dos dados.

### Configuração das variáveis de ambiente

Crie um arquivo `.env` na raiz do backend:

```env
DATABASE_URL="sua-url-de-conexao-postgresql"
JWT_SECRET="sua-chave-secreta"
```

**Importante:** mantenha as credenciais protegidas e não publique o arquivo `.env` no GitHub.

### Comandos do Prisma

Executar as migrations:

```bash
npx prisma migrate dev
```

Criar uma migration após alterações no schema:

```bash
npx prisma migrate dev --name nome_da_mudanca
```

Visualizar os dados do banco:

```bash
npx prisma studio
```

## 🚀 Executando o Projeto

Após instalar as dependências e configurar o banco de dados, execute:

```bash
npm run dev
```

Por padrão, considerando a configuração apresentada, o servidor estará disponível em:

```text
http://localhost:3000
```

_A porta pode variar conforme a configuração do arquivo `server.js`._

## 🔗 Endpoints da API

A API disponibiliza operações para gerenciamento de usuários, categorias e produtos.

### 👤 Usuários

| Método HTTP | Endpoint     | Descrição         |
| ----------- | ------------ | ----------------- |
| GET         | `/users/:id` | Consultar usuário |
| POST        | `/users`     | Cadastrar usuário |
| PUT         | `/users/:id` | Atualizar usuário |
| DELETE      | `/users/:id` | Excluir usuário   |

### 📦 Produtos

| Método HTTP | Endpoint        | Descrição         |
| ----------- | --------------- | ----------------- |
| GET         | `/products`     | Listar produtos   |
| GET         | `/products/:id` | Consultar produto |
| POST        | `/products`     | Criar produto     |
| PUT         | `/products/:id` | Atualizar produto |
| DELETE      | `/products/:id` | Excluir produto   |

### 🏷️ Categorias

| Método HTTP | Endpoint          | Descrição           |
| ----------- | ----------------- | ------------------- |
| GET         | `/categories`     | Listar categorias   |
| GET         | `/categories/:id` | Consultar categoria |
| POST        | `/categories`     | Criar categoria     |
| PUT         | `/categories/:id` | Atualizar categoria |
| DELETE      | `/categories/:id` | Excluir categoria   |

### 🔐 Autenticação

| Método HTTP | Endpoint    | Descrição          |
| ----------- | ----------- | ------------------ |
| POST        | `/login`    | Autenticar usuário |
| POST        | `/register` | Registrar usuário  |

_Os caminhos acima representam a documentação prevista para os recursos. Confira o arquivo de rotas antes de utilizá-los como referência definitiva._

## 🔐 Autenticação

A autenticação utiliza JSON Web Token (JWT).

O fluxo de autenticação funciona da seguinte maneira:

1. O usuário envia suas credenciais para a rota de login.
2. O backend verifica as informações recebidas.
3. Após a validação, é gerado um token JWT.
4. O cliente utiliza o token nas requisições protegidas.
5. O middleware verifica a validade do token antes de permitir o acesso.

Exemplo de cabeçalho para requisições autenticadas:

```http
Authorization: Bearer SEU_TOKEN_JWT
```

## 📚 Aprendizados

Durante o desenvolvimento do backend, foram praticados conceitos como:

- Desenvolvimento de APIs REST.
- Arquitetura MSC.
- Construção de rotas com Express.js.
- Separação de responsabilidades.
- Implementação de operações CRUD.
- Integração com PostgreSQL.
- Manipulação de dados com Prisma ORM.
- Autenticação utilizando JWT.
- Criptografia de senhas com Bcrypt.
- Configuração de variáveis de ambiente.
- Testes de endpoints utilizando Insomnia.
- Integração entre frontend e backend.

## 🚧 Melhorias Futuras

- Implementação de testes automatizados.
- Documentação da API com Swagger.
- Validação avançada de dados.
- Melhorias no tratamento de erros.
- Paginação e filtros de produtos.
- Upload e gerenciamento de imagens.
- Integração com meios de pagamento.
- Dockerização da aplicação.

---

## 👨‍💻 Autores

Desenvolvido por:

- **Renato Bezerra**
- **Juliana Chaves**
- **José Harimatéia**

📚 Estudantes de Análise e Desenvolvimento de Sistemas.

---

<div align="center">

### ⭐ Se gostou do projeto, considere deixar uma estrela no repositório!

**[Acessar repositório DripStore](https://github.com/renatobmenezes/DripStore)**

</div>

# 👟 DripStore — Frontend

> Plataforma de e-commerce desenvolvida com React e Vite, com foco em experiência do usuário, componentização, reutilização de componentes e integração com uma API REST.

---

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

---

## 📑 Navegação

- [📌 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🏗️ Arquitetura](#️-arquitetura)
- [📂 Estrutura de Pastas](#-estrutura-de-pastas)
- [⚙️ Configuração do Ambiente](#️-configuração-do-ambiente)
- [🚀 Executando o Projeto](#-executando-o-projeto)
- [🔗 Integração com Backend](#-integração-com-backend)
- [📚 Aprendizados](#-aprendizados)
- [🚧 Melhorias Futuras](#-melhorias-futuras)
- [👨‍💻 Autores](#-autores)

---

## 📌 Sobre o Projeto

O **DripStore** é uma aplicação de e-commerce desenvolvida para proporcionar uma experiência de compra intuitiva e organizada.

O frontend foi construído utilizando React e Vite, explorando conceitos de componentização, gerenciamento de estado e organização de interfaces.

A aplicação trabalha em conjunto com um backend desenvolvido em Node.js e Express, responsável pelo processamento das requisições e comunicação com o banco de dados.

## ✨ Funcionalidades

### 🛍️ Interface e experiência do usuário

- Página inicial dinâmica.
- Catálogo de produtos.
- Página de detalhes dos produtos.
- Carrinho de compras.
- Checkout.
- Sistema de login e cadastro.
- Interface responsiva.
- Componentes reutilizáveis.

### ⚛️ Gerenciamento de estado

- Context API para gerenciamento do carrinho.
- Compartilhamento de estados entre componentes.
- Organização e reutilização de componentes.
- Navegação entre páginas.

## 🛠️ Tecnologias Utilizadas

| Tecnologia   | Função                              |
| ------------ | ----------------------------------- |
| React        | Construção da interface             |
| Vite         | Ambiente de desenvolvimento e build |
| JavaScript   | Lógica da aplicação                 |
| CSS          | Estilização das interfaces          |
| Context API  | Gerenciamento de estado             |
| Git e GitHub | Versionamento de código             |

## 🏗️ Arquitetura

O frontend representa a camada de apresentação da aplicação.

A comunicação com o backend ocorre por meio de requisições HTTP, utilizando uma API REST.

```text
┌─────────────────────────┐
│        Frontend         │
│                         │
│      React + Vite       │
│                         │
│  Páginas e Componentes  │
└────────────┬────────────┘
             │
             │ Requisições HTTP
             ▼
┌─────────────────────────┐
│        Backend          │
│                         │
│     Node.js + Express   │
│                         │
│       API REST          │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│       PostgreSQL        │
│                         │
│       Prisma ORM        │
└─────────────────────────┘
```

## 📂 Estrutura de Pastas

Estrutura de referência do frontend:

```text
frontend/
├── public/
└── src/
    ├── assets/
    ├── components/
    ├── context/
    ├── data/
    ├── pages/
    └── routes/
```

## ⚙️ Configuração do Ambiente

### 1. Clonar o repositório

```bash
git clone https://github.com/renatobmenezes/DripStore-final
```

### 2. Acessar o projeto

```bash
cd DripStore
```

### 3. Instalar as dependências

```bash
npm install
```

## 🚀 Executando o Projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Por padrão, o Vite disponibiliza a aplicação em:

```text
http://localhost:5173
```

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar a versão compilada:

```bash
npm run preview
```

## 🔗 Integração com Backend

O frontend utiliza uma API REST para acessar os recursos disponibilizados pelo backend.

Entre as operações previstas estão:

- Consulta de produtos.
- Consulta de categorias.
- Autenticação de usuários.
- Cadastro e gerenciamento de usuários.
- Operações relacionadas ao e-commerce.

Para executar a aplicação completa, consulte também o README do backend.

## 📚 Aprendizados

Durante o desenvolvimento, foram trabalhados conceitos como:

- Desenvolvimento de interfaces com React.
- Componentização e reutilização de código.
- Gerenciamento de estado com Context API.
- Organização de projetos frontend.
- Navegação entre páginas.
- Integração com APIs REST.
- Comunicação entre frontend e backend.
- Desenvolvimento de aplicações web fullstack.

## 🚧 Melhorias Futuras

- Sistema de favoritos (Wishlist).
- Melhorias no checkout.
- Integração com meios de pagamento.
- Otimização de performance.
- Melhorias de acessibilidade.
- Testes automatizados.
- Aprimoramento da responsividade.

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

# 🧠 Projeto CRUD de alunos

Sistema CRUD completo desenvolvido com Node.js, Express, Sequelize e SQLite3, que permite o cadastro, alteração, exclusão e listagem de alunos e usuários.
O projeto também implementa autenticação JWT e rotas protegidas, além de ser totalmente containerizado com Docker e permitir upload de imagens.

# 🚀 funcionalidades

- [x] CRUD de usuarios
- [x] CRUD de alunos
- [x] Autenticação JWT com geração e verificação de token
- [x] Rotas protegidas por middleware de autenticação
- [x] Upload de imagens com Multer
- [x] Conteinerização com docker

# 🧩 tecnologias utilizadas

- bcrypt
- dotenv
- express
- jsonwebtoken
- multer
- sequelize
- sequelize-cli
- sqlite3
- nodemon
- docker

# ⚙️ pré-requisitos

Antes de iniciar, necessario instalar na maquina:

- Node.js
- docker desktop (para windows)

# 🛠️ Instalação

Clone o repositorio e instala as dependências:

```
git clone https://github.com/JonasLucas00/Projeto-CRUD-alunos.git
npm install
```

# ⚙️ configuração do ambiente

Criar arquivo .env com suas variáveis e TOKEN_SECRET para validaçào JWT:

```
TOKEN_SECRET:sua_chave_jwt_aqui
```


# 🧪 Uso
Iniciar container:

```
docker compose up -d --build
```

testar aplicação via insomnia ou postman ex:

```
POST('/user') → Cria usuario
POST('/login') → Autenticação e geração do token
POST('/alunos') → Cria aluno
POST('/alunos/index') → Listagem de alunos
```

Enviar no body da requisição os dados para o CRUD


# 🧑‍💻 Autor

Lucas Jonas da Silva

📬 [Linkedin](https://www.linkedin.com/in/lucas-jonas-83209b1a3)
📦 [GitHub](https://github.com/JonasLucas00)
# 🧠 Projeto CRUD de alunos

Sistema CRUD completo desenvolvido com Node.js, Express, Sequelize e SQLite3, que permite o cadastro, alteração, exclusão e listagem de alunos e usuários.
O projeto também implementa autenticação JWT e rotas protegidas, além de ser totalmente containerizado com Docker e permitir upload de imagens.

# 🚀 Funcionalidades

- [x] CRUD de usuarios
- [x] CRUD de alunos
- [x] Autenticação JWT com geração e verificação de token
- [x] Rotas protegidas por middleware de autenticação
- [x] Upload de imagens com Multer
- [x] Conteinerização com docker

# 🧩 Tecnologias utilizadas

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

# ⚙️ Pré-requisitos

Antes de iniciar, necessario instalar na maquina:

- Node.js
- docker desktop (para windows)


# ⚙️ Configuração do ambiente

Criar arquivo .env com suas variáveis e TOKEN_SECRET para validaçào JWT:
    - Importante não versionar arquivo `.env`

```
TOKEN_SECRET:sua_chave_jwt_aqui
```


# 📦 Instalação e execução
1. Clonar o repositório
```
git clone https://github.com/JonasLucas00/Projeto-CRUD-alunos.git
```

2. Instalar as dependências
```
npm install
```

3. Subir a aplicação com Docker
```
docker compose up -d --build
```

A aplicação ficará disponível em:
```
http://localhost:3000
```


# 🔐 Autenticação

Algumas rotas são protegidas por autenticação JWT.

Após o login, envie o token no header das requisições protegidas:

Authorization: Bearer <seu_token_jwt>


# 👤 Rotas de Usuários (/user)

## Criar usuário

```
POST /user
```

Body
```
{
  "name": "Lucas",
  "email": "lucas@email.com",
  "password": "123456"
}
```

📌 Observações:

O email deve ser único

A senha é armazenada como hash no banco de dados

## Listar usuários (rota protegida)

GET /user/index

🔒 Requer JWT

# 🔑 Login (/login)

Efetuar login e gerar token JWT
```
POST /login
```

Body
```
{
  "email": "lucas@email.com",
  "password": "123456"
}
```

📌 Retorna um token JWT válido para acessar rotas protegidas.

# 🎓 Rotas de Alunos (/alunos)

Todas as rotas de alunos são protegidas por JWT.

## Criar aluno

```
POST /alunos
```

Body
```
{
  "name": "João",
  "sobrenome": "Silva",
  "email": "joao@email.com",
  "idade": 20,
  "peso": 70,
  "altura": 1.75
}
```

📌 Não permite cadastro de alunos com email duplicado.

## Atualizar aluno

```
PUT /alunos/update
```

Body (enviar apenas os campos a serem atualizados)
```
{
  "email": "joao@email.com",
  "peso": 72
}
```

## Buscar aluno por email

```
GET /alunos/show
```

Body
```
{
  "email": "joao@email.com"
}
```

## Listar todos os alunos
GET /alunos/index

## Deletar aluno por email

```
DELETE /alunos/delete
```

Body
```
{
  "email": "joao@email.com"
}
```

📌 Ao deletar um aluno, todas as imagens associadas a ele também são removidas do banco de dados.

## Deletar todos os alunos
DELETE /alunos/deleteAll

⚠️ Remove todos os registros do model de alunos.

# Rota de upload de fotos
Rotas protegidas pelo JWT token.

## Enviar foto
Enviar ID do aluno no body.

```
POST /uploads
```

Body
```
{
  "id": "1"
}
```

## Listar todas as fotos dos alunos

```
GET /uploads/index
```


# 🧠 Observações finais

Utilize Postman ou Insomnia para testar as rotas

Projeto com foco em estudo e boas práticas de backend

Estrutura organizada em controllers, models e routes


# 🧑‍💻 Autor

Lucas Jonas da Silva

📬 [Linkedin](https://www.linkedin.com/in/lucas-jonas-83209b1a3)
📦 [GitHub](https://github.com/JonasLucas00)
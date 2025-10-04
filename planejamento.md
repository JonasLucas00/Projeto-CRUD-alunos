# to do

## 1. Inicio servidor express + nodemon (rodando em container docker com hotReload nodemon)

instalação de dependencias, criação e configuração basica dos arquivos abaixo.
Mostrando mensagem 'success' ao iniciar o servidor express.

1. Iniciei projeto com criação do package.json e instalação das dependencias:
    - dotenv
    - sequelize
    - sqlite3
    - nodemon
    - sequelize-cli
    - express

2. Criação dos arquivos:
    - server.js
    - dockerfile
    - docker-compose.yml
    - .giignore
    - .dockerignore
    - nodemon.json
    - .env

## feats

1. [x] Criação do CRUD completo index, show, update e delete (teste com insomnia)

    - [x] index (com rota e controller)
    - [x] show (com rota e controller)
    - [x] update (com rota e controller)
    - [x] delete (com rota e controller)

2. [x] Autenticação do usuario (JWT), validar login do user e gerar Token

- Instalar JWT via npm OK
- Definir value do token e tempo de expiração (dotenv) OK
- Criar controller para gerenciar token
- Criar arquivo da rota e criar a rota da validação `token`
- user acessar rota do token (login), validamos email e senha
- Se for valido, gerar token e enviar para o user

3. [x] Middleware de verificação do token JWT (authMiddlweare.js)
4. [x] Criar rotas da parte de alunos e model Aluno
    - [x] Criar model e migration alunos
    - [x] Definir rotas alunos
5. [] CRUD alunos
    - [] implementar validação JWT

### Pós config inicial

Dependencias:

- bcrypt

# Configuração sequelize

1. Iniciar sequelize `npx sequelize-cli init` cria pastas:
    - /config/config.json (alterado para databse.js)
    - /migrations
    - /models/index.js
    - /seeders

2. configurar arquivos database.js para uso do sqlite3

3. Criar arquivo `.sequelizerc` para apontar para database.js e configurar demais rotas

4. rodar comando para criar o model `npx sequelize-cli model:generate --name User --attributes name:string,email:string`
    - cria arquivo /models/Users.js (model)
    - migrations/YYYYMMDDHHMMSS-create-user.js (arquivo migration)


## Uso do sequelize

1. Gerar arquivo `database.sqlite` (rodar migrations) `npx sequelize-cli db:migrate`

## OBS

- Se usar database.js em vez de config.json, crie um `.sequelizerc` apontando para ele.

# DUVIDAS

1. Estou enviando dados via JSON e recebendo o User.create(req.body). Meu model de Users possui as chaves
name, email e password. Quais tipos de dados eu posso enviar no User.create para efetuar a criaçào? pode ser
qualquer tipo de dados (como objeto, json, array etc) contando que tenha o mesmo nome das chaves do model?

2. O usuario fez login, com isso foi validado seu token, ele consegue acessar rotas protegidas.
Se ele alterar o email com o controller upddate, o token dele ainda vai ser valido para acessar as rotas protegidas?
O correto seria, após salvar esse novo email no BD, forçar um novo login com o email correto?
Pois por exemplo, e se o token for valido por 7 dias? a pessoa já trocou o email mas o token ficaria valido por
7 dias ainda?
- R: Uma abordagem mais comum é deixar apenas do ID no payload do token, pois o ID não muda.

# COMMIT

feat: Cria model alunos

<DEATALHES>
Implementado model alunos para posteriormente implementar um CRUD

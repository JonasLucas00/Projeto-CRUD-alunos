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
3. [] Middleware de verificação do JWT

- Instalar tokens via npm OK
- Definir value do token e tempo de expiração (dotenv) OK
- Criar controller para gerenciar token
- Criar arquivo da rota e criar a rota da validação `token`
- user acessar rota do token (login), validamos email e senha
- Se for valido, gerar token e enviar para o user


- No JWT não é usado sessão, é gerado um chave onde uma fica com o cliente e outra com o servidor? e a chave do cliente é armazenada no navegador?
    
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

## CONTINUAR

- Estou enviando dados via JSON e recebendo o User.create(req.body). Meu model de Users possui as chaves
name, email e password. Quais tipos de dados eu posso enviar no User.create para efetuar a criaçào? pode ser
qualquer tipo de dados (como objeto, json, array etc) contando que tenha o mesmo nome das chaves do model?

Arquivo alunos nome, sobremome, email, idade, peso, altura
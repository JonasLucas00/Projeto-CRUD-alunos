# to do

## Inicio servidor express + nodemon (rodando em container docker com hotReload nodemon)

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

- Verificar teste da aplicação com docker
- Continuar videoaula da udemy

# to do

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

5. [x] CRUD alunos
    - [x] implementar validação JWT nas rotas dos alunos

6. [x] permitir upload de arquivos (como fotos)
    - [x] Proteger rota de upload de arquivos

7. [x] Salvar foto na base de dados
    - [x] criar model e migration para salvar as fotos. A tabela de fotos deve conter o id do aluno.

8. [x] Listar os alunos com suas fotos

9. [x] Configurar arquivos estaticos
    - [x] Criar arquivo imagens dentro de uploads para salvar as fotos
    - [x] adicionar a url no model fotos e no model alunos

10. [] Deploy da aplicação na AWS EC2

# DUVIDAS

1. Estou enviando dados via JSON e recebendo o User.create(req.body). Meu model de Users possui as chaves
name, email e password. Quais tipos de dados eu posso enviar no User.create para efetuar a criaçào? pode ser
qualquer tipo de dados (como objeto, json, array etc) contando que tenha o mesmo nome das chaves do model?

2. O usuario fez login, com isso foi validado seu token, ele consegue acessar rotas protegidas.
Se ele alterar o email com o controller upddate, o token dele ainda vai ser valido para acessar as rotas protegidas?
O correto seria, após salvar esse novo email no BD, forçar um novo login com o email correto?
Pois por exemplo, e se o token for valido por 7 dias? a pessoa já trocou o email mas o token ficaria valido por
7 dias ainda?
- R: Uma abordagem mais comum é deixar apenas do ID no payload do token, pois o ID não muda. Ou usar o middleware em todas as rotas para sempre validar os dados que podem ser alterados pelo user

3. Por exemplo, no meu model de fotos e na migration, eu tenho esse campos abaixo, mas se eu for enviar um arquivo .png ou jpeg, o valor de fileName e original name devem ser informados no body da requisião manualmente? 

`Fotos.init({ name: DataTypes.STRING, 
originalName: DataTypes.STRING, 
fileName: DataTypes.STRING, 
alunoID: DataTypes.INTEGER }),`

- R: Não Você não precisa enviar fileName nem originalName no body da requisição manualmente. Esses valores são extraídos automaticamente pelo Multer quando o upload é feito, e você mesmo os salva no banco (usando o model Fotos) com base no req.file


build é do sucrase, ele é um compilador? 

# Fluxo

- Geramos um token na rota 'localhost/token' e com isso validamos esse token em todas as rotas
- Se o token é valido, o user consegue acessar as rotas para utilizar o CRUD


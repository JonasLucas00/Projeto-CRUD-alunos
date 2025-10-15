const express = require('express');
const app = express();
require('dotenv').config()
const path = require('path')

const userRouter = require('../src/routes/userRoute.js')
const homeRouter = require('../src/routes/homeRouter.js')
const alunosRouter = require('../src/routes/alunosRouter.js')
const jwtRouter = require('../src/routes/jwtRouter.js');
const fotoRouter = require('../src/routes/fotoRouter.js')
const sqliteConnect = require('../src/config/sqliteConnect.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'uploads', 'images')));
console.log(path.join((__dirname, 'uploads', 'images')))


app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/token', jwtRouter);
app.use('/alunos', alunosRouter);
app.use('/uploads', fotoRouter);
sqliteConnect.testeDB()


app.listen(process.env.APP_PORT, () => {
    console.log(`Online http://${process.env.APP_HOST}:${process.env.APP_PORT}`)
})
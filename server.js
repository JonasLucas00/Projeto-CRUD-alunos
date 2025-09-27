const express = require('express');
const app = express();
require('dotenv').config()
// const { sequelize, User } = require('./src/models');
const userRouter = require('./src/routes/userRoute.js')
const homeRouter = require('./src/routes/homeRouter.js')
const sqliteConnect = require('./src/config/sqliteConnect.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', homeRouter)
app.use('/user', userRouter)
sqliteConnect.testeDB()

app.listen(process.env.APP_PORT, () => {
    console.log(`Online http://${process.env.APP_HOST}:${process.env.APP_PORT}`)
})
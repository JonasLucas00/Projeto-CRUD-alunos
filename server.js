const express = require('express');
const app = express();
require('dotenv').config()
// const { sequelize, User } = require('./src/models');
const indexRouter = require('./src/routes/indexRoute.js')
const sqliteConnect = require('./src/config/sqliteConnect.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter)
sqliteConnect.testeDB()

app.listen(process.env.APP_PORT, () => {
    console.log(`Online http://${process.env.APP_HOST}:${process.env.APP_PORT}`)
})
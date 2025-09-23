const { sequelize, User } = require('../models')

module.exports.testeDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('banco conectado')
    } catch (error) {
        console.log(`erro detectado: ${error}\n`)
    }
}
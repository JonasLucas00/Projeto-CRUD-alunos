const { sequelize, User } = require("../models")

module.exports.criaUser = async (req, res) => {
    try {
        const user = await User.create({
            name: 'Lucas',
            email: 'lucas.jonas@gmail.com'
        })
        res.send(`Usuario criado: ${JSON.stringify(user)}`)
        console.log('usuario criado')

    } catch (error) {
        console.log(`Erro ao criar user: ${error}`)
    }
}

module.exports.renderIndex = (req, res) => {
    res.send('sucesso');
}

module.exports.findData = async (req, res) => {
    try {
        const users = await User.findAll()// já retorna um array de objetos
        console.log(`Dados localizados tipo: ${typeof dados}`)
        return res.json({ users })

    } catch (error) {
        console.log(`dados nao localizados: ${error}`)
    }

}
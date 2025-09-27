const { where } = require("sequelize");
const { sequelize, User } = require("../models")

class UserController {
    constructor() {

    }

    async store(req, res) {
        console.log('teste')
        try {
            const novoUser = await User.create(req.body)
            console.log(`dados criados ${JSON.stringify(novoUser)}`);
            return res.json({ message: 'usuario criado', user: novoUser })

        } catch (err) {
            console.log(`erro detectado ${err}`)
            return res.json(`erro no store \n ${err}`)
        }
    }

    teste(req, res) {
        return res.send('teste sucesso')
    }

    async remoteAllData(req, res) {
        await User.destroy({ where: {}, truncate: true });
        console.log(`dados apagados`);
        return res.json({ message: 'dados apagados' })
    }

}

module.exports = new UserController();

/*
TENTAR USAR ATÉ esses 5 metodos em um unico controller. Se passar provavelmente o controller esta fazendo mais do que devia

NOMES PADRÃO DE CONTROLLERS 
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
updtate -> atualiza um usuario -> PATCH/PUT

*/
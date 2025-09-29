const { where } = require("sequelize");
const { sequelize, User } = require("../models")

class UserController {
    constructor() {

    }
    //Criação de novo usuario STORE
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

    //remoção de TODOS os dados do BD
    async deleteAll(req, res) {
        await User.destroy({ where: {}, truncate: true });
        console.log(`dados apagados`);
        return res.json({ message: 'dados apagados' })
    }

    //lista todos os usuarios
    async index(req, res) {
        try {
            const allusers = await User.findAll();
            console.log('index realizado');
            return res.json(allusers);
        } catch (error) {
            console.log(`indexError: ${error}`);
            return res.json(null)
        }
    }

    //busca um usuario especifico
    async show(req, res) {
        try {
            if (req.params.id) {
                const user = await User.findByPk(req.params.id);
                console.log('show realizado');
                return res.json(user);
            }

        } catch (error) {
            console.log(`showError: ${error}`);
            return res.json(null)
        }
    }

    //atualiza um usuario especifico
    async update(req, res) {
        try {
            if (!req.params.id) {
                return res.json('sem parametro')
            }
            const user = await User.findByPk(req.params.id)

            if (!user) {
                return res.json('user não localizado');
            }
            const novoUser = await user.update(req.body)
            console.log('update realizado');
            return res.json(novoUser)

        } catch (error) {
            console.log(`updateError: ${error}`);
            return res.json(null)
        }
    }

    async delete(req, res) {
        try {
            if (!req.params.id) {
                return res.json('sem parametro')
            }
            const user = await User.findByPk(req.params.id)

            if (!user) {
                return res.json('user não localizado');
            }

            await user.destroy()
            console.log(`delete realizado`)
            return res.json('delete realizado')

        } catch (error) {
            console.log(`deleteError: ${error}`)
            return res.json(null)
        }
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

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
            return res.json({
                message: 'usuario criado',
                id: novoUser.id,
                name: novoUser.name,
                email: novoUser.email
            })

        } catch (err) {
            console.log(`erro detectado ${err}`)
            return res.json(`erro no store \n ${err}`)
        }
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
            if (req.userId) {
                const user = await User.findByPk(req.userId);
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
            if (!req.userId) {
                return res.json('sem parametro')
            }
            const user = await User.findByPk(req.userId)

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
            if (!req.userId) {
                return res.json('sem parametro')
            }
            const user = await User.findByPk(req.userId)

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

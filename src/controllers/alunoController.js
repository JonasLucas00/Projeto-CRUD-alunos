const { Alunos } = require('../models')

class AlunoController {
    constructor() {

    }

    async store(req, res) {
        try {
            const aluno = await Alunos.create(req.body);
            res.json(aluno)

        } catch (error) {
            console.log(`${error}`)
            res.json(`Erro Aluno store `)
        }
    }

    async destroy(req, res) {
        try {
            // const match = await Alunos.findOne({ where: { email: req.body.email } })
            // if (!match) {
            //     return res.json('nao localziado');
            // }
            await Alunos.destroy({ where: {}, truncate: true });
            return res.json('feito')
        } catch (error) {
            return res.json(error)

        }
    }

    async index(req, res) {
        try {
            const alunos = await Alunos.find()
            console.log('Index executado')
            res.json(alunos)
        } catch (error) {
            console.log(`erro index: ${error}`)
            res.json('ERRO')
        }
    }
}

module.exports = new AlunoController()

/*
CRUD
store - criar
Show - buscar um especifico
deleteOne
update - Atualizar algum dado
*/
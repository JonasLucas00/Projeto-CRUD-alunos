const { where } = require('sequelize');
const { Alunos } = require('../models')

class AlunoController {
    constructor() {

    }

    async store(req, res) {
        try {
            const aluno = await Alunos.create(req.body);
            res.json(aluno);

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
            const alunos = await Alunos.findAll()
            console.log('Index executado')
            return res.json(alunos)
        } catch (error) {
            console.log(`erro index: ${error}`)
            return res.json('ERRO')
        }
    }

    async show(req, res) {
        console.log(req.userId)
        try {
            const aluno = await Alunos.findOne({ where: { id: req.userId } })
            if (!aluno) {
                throw new Error('Aluno Não localizado')
            }
            console.log(`show realizado`);
            return res.json(aluno)
        } catch (error) {
            console.log(`erro show: ${error}`)
            return res.json({ error: error.message })
        }
    }

    async update(req, res) {

        if (!req.userId) {
            return res.json('Sem parametro')
        }
        try {
            const aluno = await Alunos.findOne({ where: req.userId })
            if (!aluno) {
                throw new Error(`dado não localizado`)
            }
            const alunoUpdate = await aluno.update(req.body);
            console.log(`update feito`);
            res.json(alunoUpdate)
        } catch (error) {
            console.log(error)
            res.json({ error: error.message })
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
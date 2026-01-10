const { where, Model } = require('sequelize');
const { Alunos } = require('../models')
const { Fotos } = require('../models');

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

    async destroyAll(req, res) {
        try {

            await Alunos.destroy({ where: {}, truncate: true });
            return res.json('feito')
        } catch (error) {
            return res.json(error)

        }
    }

    // Each aluno has a image from the images model
    // In order to delete element aluno, i have to delete  

    async destroy(req, res) {
        let { email } = req.body
        console.log(`teste delete email`)


        if (!email) {
            return res.json('Informe um paremetro para exclusão');
        }
        try {
            let aluno = await Alunos.findOne({ where: { email: email } })


            if (!aluno) {
                return res.json('Aluno não localizado para exclusão');
            }
            await aluno.destroy()
            return res.json(`Aluno identificado pelo email ${email} foi apagado do sistema`)
        } catch (error) {
            console.log(error)
            return res.json('ERRO delete')
        }
    }


    async index(req, res) {
        console.log('teste index')
        try {
            const alunos = await Alunos.findAll({
                attributes: ['id', 'name', 'sobrenome', 'email', 'altura', 'peso', 'altura'],
                include: [
                    {
                        model: Fotos,
                        as: 'fotos',
                        attributes: ['file_name', 'original_name', 'aluno_id', 'url']
                    }]

            })
            console.log('Index executado')
            return res.json(alunos)
        } catch (error) {
            console.log(`erro index: ${error}`)
            return res.json('ERRO')
        }
    }

    async show(req, res) {
        console.log(req.body.id)
        console.log(req.body.email)
        console.log('teste show')
        try {
            const aluno = await Alunos.findOne({ where: { email: req.body.email } })
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

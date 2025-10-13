const multer = require('multer');
const multerConfig = require('../config/multerConfig.js');
const upload = multer(multerConfig).single('foto');
const { Fotos } = require('../models');

class FotoController {
    //Enviar a foto para a pasta uploads
    store(req, res) {
        // middleware do multer que permite uso do req.file
        return upload(req, res, async (err) => {
            if (err) {
                console.log(`Erro no testFoto ${err}`)
                return res.json('Erro no arquivo')
            }
            console.log(req.file);

            try {
                const foto = await Fotos.create({
                    original_name: req.file.originalname,
                    file_name: req.file.filename,
                    aluno_id: req.body.aluno_id
                })
                return res.json(foto)

            } catch (error) {
                console.log(error)
                return res.json('Erro no store ou aluno não existe')
            }
        })

    }

    async index(req, res) {

        console.log(req.body)
        try {
            //busca todas as fotos de um aluno (id)
            const metaFotos = await Fotos.findAll({ where: { aluno_id: req.body.id } })
            console.log(metaFotos)
            return res.json(metaFotos)
        } catch (error) {
            console.log(error)
            return res.json('Erro index')
        }
    }
}

module.exports = new FotoController()


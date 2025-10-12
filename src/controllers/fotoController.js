const multer = require('multer');
const multerConfig = require('../config/multerConfig.js');
const upload = multer(multerConfig).single('foto');
const { Fotos } = require('../models');

class FotoController {
    //Enviar a foto para a pasta uploads
    store(req, res) {
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
                return res.json('Erro no store')
            }
        })

    }

    async index(req, res) {

    }
}

module.exports = new FotoController()


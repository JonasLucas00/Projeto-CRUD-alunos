const multer = require('multer');
const multerConfig = require('../config/multerConfig.js');
const upload = multer(multerConfig).single('foto');

class FotoController {
    async testFoto(req, res) {
        return upload(req, res, (err) => {
            if (err) {
                console.log(err)
                return res.json('Erro no arquivo')
            }
            console.log(req.file);
            return res.json({ messase: 'Foto recebida!' })
        })
    }
}

module.exports = new FotoController()
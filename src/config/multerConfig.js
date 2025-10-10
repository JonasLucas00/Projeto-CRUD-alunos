const multer = require('multer');
const path = require('path')

// Configuração de onde e como os arquivos serão salvos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../uploads')); // pasta onde vai salvar
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // renomeia o arquivo
    }
});
module.exports = { storage }; //exportar o objeto storage
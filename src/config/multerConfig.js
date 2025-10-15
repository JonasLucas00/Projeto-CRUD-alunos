const multer = require('multer');
const path = require('path')

//configuração para permitir que seja salvo apenas formato png e jpeg. (opcional)
const fileFilter = (req, file, cb) => {
    if (file.mimetype != 'image/png' && file.mimetype != 'image/jpeg') {
        return cb(new multer.MulterError('Formato de arquivo invalido'));
    }
    return cb(null, true)
}
// Configuração de onde e como os arquivos serão salvos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../uploads/images')); // pasta onde vai salvar
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // renomeia o arquivo
    }
})

module.exports = {
    fileFilter,
    storage
}
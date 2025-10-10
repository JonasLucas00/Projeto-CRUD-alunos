class FotoController {
    testFoto(req, res) {
        console.log(req.file);
        return res.json({ messase: 'Foto recebida!' })
    }
}

module.exports = new FotoController()
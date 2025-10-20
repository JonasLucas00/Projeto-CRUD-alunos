class RenderHome {

    render(req, res) {
        res.send('Aplicação conectada')
    }
}

module.exports = new RenderHome()

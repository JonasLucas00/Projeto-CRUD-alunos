class RenderHome {

    render(req, res) {
        res.send('success')
    }
}

module.exports = new RenderHome()

/*
TENTAR USAR ATÉ esses 5 metodos em um unico controller. Se passar provavelmente o controller esta fazendo mais do que devia

NOMES PADRÃO DE CONTROLLERS 
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
updtate -> atualiza um usuario -> PATCH/PUT

*/
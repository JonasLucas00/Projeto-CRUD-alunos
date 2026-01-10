const { User } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config()
class JwtController {
    constructor() {

    }

    //Login de usuario
    async login(req, res) {

        try {
            const user = await User.findOne({ where: { email: req.body.email } });

            if (!user) {
                return res.json(`Usuario não localizado`);
            }
            console.log('User localizado');
            // Utiliza função passValidate para validar senha comparando o hash da senha
            const match = await user.passValidate(req.body.password);

            if (!match) {
                return res.json(`Senha invalida`);
            }

            const token = jwt.sign(
                { id: user.id, email: user.email },
                process.env.TOKEN_SECRET,
                { expiresIn: process.env.TOKEN_EXPIRATION }
            )

            return res.json({
                user: { id: user.id, email: user.email },
                token
            });

        } catch (error) {
            console.log('erro');
            return res.json(`storeError: ${error}`);
        }
    }
}

module.exports = new JwtController()

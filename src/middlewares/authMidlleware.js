const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');
async function authMiddleware(req, res, next) {
    console.log('AuthMiddleware')
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Token não enviado' });
    }

    // "Bearer token"
    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
        return res.status(401).json({ error: 'Formato de token inválido' });
    }

    try {
        const { id, email } = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(email)
        const match = await User.findOne({ where: { email: email } })
        if (!match) {
            return res.json('Erro no match email')
        }

        //Essas variaveis ficam disponiveis nos controlles da rota onde esse middleware é usado
        req.userId = id;
        req.userEmail = email;
        console.log(`${authHeader}\n`)
        console.log(req.userId)
        console.log(req.userEmail)
        next();
    } catch (err) {
        console.log(`${authHeader}\n ${err}`)
        return res.status(401).json({ error: 'Token inválido ou expirado' });
    }
}

module.exports = authMiddleware

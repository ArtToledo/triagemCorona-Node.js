const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const User = require('../models/User');
const authConfig = require('../config/auth');


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret)
}

module.exports = {
    async createRegister(req, res) {

        try {
            const { name, cpf, email, password, typeUser, numberRegister, uf } = req.body;
        
            if (await User.findOne({ email })) {
                return res.json({ error: 'E-mail já cadastrado' });
            }

            user = '';

            if (numberRegister) {
                const response = await axios.get(`https://www.consultacrm.com.br/api/index.php?tipo=crm&uf=${uf}&q=${numberRegister}&chave=5003902526&destino=json`);
                
                let { total, status } = response.data;
                let { situacao } = response.data.item[0];

                if (Number(total) <= 0 | status !== 'true' | situacao !== 'Ativo') 
                    return res.json({ error: "Os dados informados estão incorretos, fineza preencher novamente!" })

                user = await User.create({  
                    name, 
                    cpf, 
                    email, 
                    password, 
                    typeUser,
                    numberRegister, 
                    uf
                });
            } else {
                user = await User.create({  
                    name, 
                    cpf, 
                    email, 
                    password, 
                    typeUser 
                });
            }

            user.password = undefined;

            return res.json({ 
                user,
                token: generateToken({id: user.id})
            });
        } catch (err) {
            return res.json({ error: 'Falha no cadastro tente novamente!'});
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email }).select('+password');

            if (!user)
                return res.json({ error: 'E-mail não cadastrado!' });

            if (!await bcrypt.compare(password, user.password))
                return res.json({ error: 'Senha inválida, tente novamente!' });

            user.password = undefined;

            res.json({ 
                user, 
                token: generateToken({id: user.id})
            });
        } catch (err) {
            return res.json({ error: 'Falha ao entrar'});
        }
    }
}
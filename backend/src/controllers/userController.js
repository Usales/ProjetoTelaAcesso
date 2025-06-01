const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Gerar token JWT
const generateToken = (params = {}) => {
    return jwt.sign(params, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
};

// Registrar novo usuário
exports.register = async (req, res) => {
    try {
        const { email, senha } = req.body;

        // Validações básicas
        if (!email || !senha) {
            return res.status(400).json({ error: 'Email e senha são obrigatórios' });
        }

        // Verificar se o email já existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: 'Este email já está cadastrado' });
        }

        // Criar novo usuário
        const user = await User.create({
            email,
            senha
        });

        // Remover senha do objeto retornado
        user.senha = undefined;

        return res.status(201).json({
            user,
            token: generateToken({ id: user.id })
        });
    } catch (error) {
        console.error('Erro no registro:', error);
        return res.status(400).json({ 
            error: 'Falha no registro',
            details: error.message 
        });
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        console.log('Tentativa de login:', { email });

        // Validações básicas
        if (!email || !senha) {
            return res.status(400).json({ error: 'Email e senha são obrigatórios' });
        }

        // Buscar usuário
        const user = await User.findOne({ email }).select('+senha');
        console.log('Usuário encontrado:', user ? 'Sim' : 'Não');

        if (!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        // Verificar senha
        const senhaCorreta = await user.comparePassword(senha);
        console.log('Senha correta:', senhaCorreta);

        if (!senhaCorreta) {
            return res.status(400).json({ error: 'Senha inválida' });
        }

        // Remover senha do objeto retornado
        user.senha = undefined;

        // Gerar token
        const token = generateToken({ id: user.id });
        console.log('Token gerado com sucesso');

        return res.json({
            user,
            token
        });
    } catch (error) {
        console.error('Erro no login:', error);
        return res.status(400).json({ 
            error: 'Falha no login',
            details: error.message 
        });
    }
}; 
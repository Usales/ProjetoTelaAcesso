const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    senha: {
        type: String,
        required: true,
        select: false
    },
    dataCriacao: {
        type: Date,
        default: Date.now
    }
});

// Criptografar senha antes de salvar
userSchema.pre('save', async function(next) {
    if (!this.isModified('senha')) return next();
    this.senha = await bcrypt.hash(this.senha, 10);
    next();
});

// Método para comparar senhas
userSchema.methods.comparePassword = async function(senha) {
    return await bcrypt.compare(senha, this.senha);
};

module.exports = mongoose.model('User', userSchema); 
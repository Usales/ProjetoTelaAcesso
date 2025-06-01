const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://gabrielhenriquessales1:nD3H9JXez8oNzrIv@cluster0.nnlsbkd.mongodb.net/projetotelaacesso');
        console.log(`MongoDB conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Erro: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
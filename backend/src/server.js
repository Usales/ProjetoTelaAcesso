const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');

// Configuração do ambiente
dotenv.config();

// Conectar ao banco de dados
connectDB();

// Inicialização do app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/users', userRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.json({ message: 'API funcionando!' });
});

// Porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

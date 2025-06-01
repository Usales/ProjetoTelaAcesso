const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');

// Configuração do ambiente
dotenv.config();

// Conectar ao banco de dados
connectDB();

// Inicialização do app
const app = express();

// Middlewares de segurança
app.use(helmet()); // Adiciona headers de segurança
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Restringe CORS
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
}));
app.use(express.json({ limit: '10kb' })); // Limita tamanho do payload

// Rotas
app.use('/api/users', userRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.json({ message: 'API funcionando!' });
});

// Middleware de erro
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Erro interno do servidor',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

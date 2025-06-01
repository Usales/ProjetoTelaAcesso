const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Rotas de autenticação
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router; 
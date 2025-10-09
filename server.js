const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

//conectar ao banco
const conexao = require('./db/conexao')

// Middleware
app.use(cors());
app.use(express.json());

// Servir os arquivos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota de test
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

// Iniciar o servidor
app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'))
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const usuarioRoutes = require('./src/routes/usuarios')

//conectar ao banco
const conexao = require('./src/db/conexao')

// Middleware
app.use(cors());
app.use(express.json());

// Servir os arquivos da pasta public
app.use(express.static(path.join(__dirname,'public')));

// Rota usuario
app.use('/api', usuarioRoutes)



// Iniciar o servidor
app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'))
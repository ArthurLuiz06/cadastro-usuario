const mysql = require('mysql2');

const conexao = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '1234',
database: 'cadastro_usuario'
});

conexao.connect(err => {
    if (err) {
        console.log('Error ao conectar ao conectar ao MySQL:', err)
    } else {
        console.log('Conectado ao MySQL com sucesso!')
    }
})


module.exports = conexao;
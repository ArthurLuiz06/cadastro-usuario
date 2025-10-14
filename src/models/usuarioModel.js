const conexao = require('../db/conexao');

const UsuarioModel = {
  cadastrar: (usuario, callback) => {
    const sql = 'INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)';
    conexao.query(sql, [usuario.nome, usuario.sobrenome, usuario.email, usuario.senha], callback);
  },

  listar: (callback) => {
    const sql = 'SELECT * FROM usuarios';
    conexao.query(sql, callback);
  }
};

module.exports = UsuarioModel;
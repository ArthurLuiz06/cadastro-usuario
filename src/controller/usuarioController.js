const usuario = require('../models/usuarioModel');

exports.cadastrar = (req, res) => {
    const {nome, sobrenome, email, senha} = req.body;

    if(!nome || !email || !senha) {
        return res.status(400).send('Prencha todos os campos obrigatórios')
    }

    const novoUsuario = {nome, sobrenome, email, senha}

    usuario.cadastrar(novoUsuario, (erro, resultado) => {
        if(erro) {
            console.log('Erro ao cadastrar usuário.', erro);
            return res.status(500).send('Erro ao cadastrar usuário.')
        }
        res.status(201).send('Usuário cadastrado com sucesso!');
    })
}

exports.listar = (req, res) => {
    usuario.listar((erro, resultado) => {
        if(erro) {
            console.log('Erro ao listar usuários:', erro)
            return res.status(500).send('Erro ao listar usuários.')
        }
        res.json(resultado)
    })
}
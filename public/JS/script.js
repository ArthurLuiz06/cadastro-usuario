const form = document.getElementById('formCadastro');
const mensagem = document.getElementById('mensagem');
const lista = document.getElementById('listaUsuarios');

// Função para listar usuários
async function listarUsuarios() {
  try {
    const resposta = await fetch('/api/usuarios');
    const usuarios = await resposta.json();

    lista.innerHTML = '';
    usuarios.forEach(u => {
      const item = document.createElement('li');
      item.textContent = `${u.nome} ${u.sobrenome} - ${u.email}`;
      lista.appendChild(item);
    });
  } catch (erro) {
    console.error('Erro ao listar usuários:', erro);
  }
}

// Função para cadastrar usuário
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const usuario = {
    nome: form.nome.value,
    sobrenome: form.sobrenome.value,
    email: form.email.value,
    senha: form.senha.value
  };

  try {
    const resposta = await fetch('/api/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    });

    const texto = await resposta.text();
    mensagem.textContent = texto;
    mensagem.style.color = resposta.ok ? 'green' : 'red';

    form.reset();
    listarUsuarios();
  } catch (erro) {
    mensagem.textContent = 'Erro ao cadastrar usuário.';
    mensagem.style.color = 'red';
  }
});

// Carrega a lista ao abrir a página
listarUsuarios();

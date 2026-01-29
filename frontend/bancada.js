// USUÁRIOS DO SISTEMA (objetos)
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// IDENTIFICA A BANCADA PELO TÍTULO
let bancadaAtual = document.title;
let usuariosBancada = JSON.parse(localStorage.getItem(bancadaAtual)) || [];

// SALVAR
function salvar() {
  localStorage.setItem(bancadaAtual, JSON.stringify(usuariosBancada));
}

/* =====================
   PAINEL PRINCIPAL
===================== */

function cadastrar() {
  alert("Use a tela de cadastro para criar usuários.");
}

/* =====================
   BANCADAS
===================== */

function buscar() {
  const nome = buscarUsuario.value.trim();
  const usuario = usuarios.find(u => u.usuario === nome);

  if (!usuario) {
    resultado.innerText = "Usuário NÃO cadastrado no sistema";
    resultado.style.color = "red";
    return;
  }

  if (usuariosBancada.includes(nome)) {
    resultado.innerText = "Usuário já está nesta bancada";
    resultado.style.color = "#22c55e";
  } else {
    resultado.innerText = "Usuário encontrado. Pode adicionar.";
    resultado.style.color = "#60a5fa";
  }
}

function adicionar() {
  const nome = buscarUsuario.value.trim();

  if (!usuarios.some(u => u.usuario === nome)) {
    alert("Usuário não existe no sistema");
    return;
  }

  if (usuariosBancada.includes(nome)) {
    alert("Usuário já está nesta bancada");
    return;
  }

  usuariosBancada.push(nome);
  salvar();
  alert("Usuário adicionado à bancada");
}

function remover() {
  const nome = buscarUsuario.value.trim();

  if (!usuariosBancada.includes(nome)) {
    alert("Usuário não está nesta bancada");
    return;
  }

  usuariosBancada = usuariosBancada.filter(u => u !== nome);
  salvar();
  alert("Usuário removido da bancada");
}

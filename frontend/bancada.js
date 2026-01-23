let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function salvar() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function cadastrar() {
  const nome = novoUsuario.value.trim();
  if (!nome) return alert("Digite um nome");

  if (usuarios.includes(nome)) return alert("Usuário já existe");

  usuarios.push(nome);
  salvar();
  alert("Usuário cadastrado");
  novoUsuario.value = "";
}

function buscar() {
  const nome = buscarUsuario.value.trim();
  resultado.innerText = usuarios.includes(nome)
    ? "Usuário encontrado"
    : "Usuário não encontrado";
}

function remover() {
  const nome = buscarUsuario.value.trim();
  if (!usuarios.includes(nome)) return alert("Usuário não encontrado");

  usuarios = usuarios.filter(u => u !== nome);
  salvar();
  alert("Usuário removido");
  resultado.innerText = "";
}

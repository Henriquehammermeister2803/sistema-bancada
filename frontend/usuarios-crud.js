let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const lista = document.getElementById("listaUsuarios");

function salvarLocal() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  renderizar();
}

function salvarUsuario() {
  const index = document.getElementById("editIndex").value;

  const usuario = {
    nome: nome.value.trim(),
    sobrenome: sobrenome.value.trim(),
    nascimento: nascimento.value,
    tipo: tipo.value,
    email: email.value.trim(),
    senha: senha.value
  };

  if (Object.values(usuario).some(v => !v)) {
    alert("Preencha todos os campos");
    return;
  }

  fetch("http://localhost:1880/autenticacao/autenticar",{
    method:"POST",
    body:JSON.stringify(usuario)  
  }).then((resposta)=>{
    console.log(resposta)
    if(resposta.OK){
        resposta.JSON()
    }
  }).then((usuario)=>{
    alert("Usuário cadastrado")
  })



  limparFormulario();
}

function renderizar() {
  lista.innerHTML = "";

  usuarios.forEach((u, i) => {
    lista.innerHTML += `
      <li class="usuario-item">
        <strong>${u.nome} ${u.sobrenome}</strong><br>
        ${u.tipo} • ${u.email}
        <div class="acoes">
          <button onclick="editar(${i})">Editar</button>
          <button class="remove" onclick="excluir(${i})">Excluir</button>
        </div>
      </li>
    `;
  });
}

function editar(i) {
  const u = usuarios[i];

  nome.value = u.nome;
  sobrenome.value = u.sobrenome;
  nascimento.value = u.nascimento;
  tipo.value = u.tipo;
  email.value = u.email;
  senha.value = u.senha;

  document.getElementById("editIndex").value = i;
}

function excluir(i) {
  if (confirm("Deseja excluir este usuário?")) {
    usuarios.splice(i, 1);
    salvarLocal();
  }
}

function limparFormulario() {
  nome.value = "";
  sobrenome.value = "";
  nascimento.value = "";
  tipo.value = "";
  email.value = "";
  senha.value = "";
}

renderizar();

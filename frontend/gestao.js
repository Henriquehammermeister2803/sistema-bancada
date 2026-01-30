const lista = document.getElementById("listaUsuarios");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function mostrarUsuarios() {
  lista.innerHTML = "";

  usuarios.forEach((u, i) => {
    lista.innerHTML += `
      <li>
        ${u.nome} ${u.sobrenome} - ${u.email}
        <button onclick="removerUsuario(${i})">Remover</button>
      </li>
    `;
  });
}

function removerUsuario(index) {
  usuarios.splice(index, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrarUsuarios();
}

mostrarUsuarios();

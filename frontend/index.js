function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  if (user === "" || pass === "") {
    alert("Preencha todos os campos!");
    return;
  }

  alert("Login feito com sucesso!\nUsuário: " + user);
  window.location.href = 'bancada/bancada.html';
}

function cadastrar() {
  const usuario = document.getElementById("cadUser").value;
  const email = document.getElementById("cadEmail").value;
  const data = document.getElementById("cadData").value;
  const cidade = document.getElementById("cadCidade").value;
  const senha = document.getElementById("cadSenha").value;

  if (usuario === "" || email === "" || data === "" || cidade === "" || senha === "") {
    alert("Preencha todos os campos!");
    return;
  }

  alert(
    "Cadastro realizado com sucesso!\n\n" +
    "Usuário: " + usuario +
    "\nE-mail: " + email +
    "\nNascimento: " + data +
    "\nCidade: " + cidade
  );

  // Volta para login
  window.location.href = "index.html";
}
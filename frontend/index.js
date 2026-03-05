function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  if (user === "" || pass === "") {
    alert("Preencha todos os campos!");
    return;
  }

  alert("Login feito com sucesso!\nUsuário: " + user);
  window.location.href = 'bancada.html';
}

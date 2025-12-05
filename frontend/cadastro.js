const form = document.getElementById("cadastroForm");

form.addEventListener("submit", function(event){
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const email = document.getElementById("email").value;
  const cidade = document.getElementById("cidade").value;

  if(nome === "" || idade === "" || email === "" || cidade === ""){
    alert("Preencha todos os campos!");
    return;
  }

  if(idade < 1){
    alert("Digite uma idade válida!");
    return;
  }

  alert("Cadastro realizado com sucesso!");

  // Redireciona de volta para o login
  window.location.href = "index.html";
});
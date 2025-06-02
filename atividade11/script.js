const form = document.getElementById("formCadastro");
const lista = document.getElementById("listaUsuarios");
const btnLimpar = document.getElementById("btnLimpar");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // evita recarregar a página

  // Captura os valores
  const usuario = form.usuario.value.trim();
  const senha = form.senha.value.trim();
  const telefone = form.telefone.value.trim();
  const nascimento = form.nascimento.value;
  const email = form.email.value.trim();

  // Validação simples - verifica se algum campo está vazio
  if (!usuario || !senha || !telefone || !nascimento || !email) {
    console.error("Por favor, preencha todos os campos.");
    return;
  }

  // Criar um novo item na lista com os dados
  const li = document.createElement("li");
  li.textContent = `Usuário: ${usuario}, Senha: ${senha}, Telefone: ${telefone}, Nascimento: ${nascimento}, Email: ${email}`;

  // Adicionar o item à lista
  lista.appendChild(li);

  // Limpar o formulário
  form.reset();
});

btnLimpar.addEventListener("click", () => {
  lista.innerHTML = "";
});

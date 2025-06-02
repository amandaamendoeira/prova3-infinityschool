const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

// Adicionar tarefa
btnAdicionar.addEventListener("click", () => {
  const texto = inputTarefa.value.trim();
  if (texto === "") {
    alert("Digite uma tarefa.");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("tarefa");

  const span = document.createElement("span");
  span.textContent = texto;

  // Marcar como concluída ao clicar
  span.addEventListener("click", () => {
    span.classList.toggle("concluida");
  });
  
  const btnRemover = document.createElement("button");
  btnRemover.textContent = "Remover";
  btnRemover.classList.add("remover");

  // Remover tarefa
  btnRemover.addEventListener("click", () => {
    listaTarefas.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(btnRemover);
  listaTarefas.appendChild(li);

  inputTarefa.value = "";
  inputTarefa.focus();
});

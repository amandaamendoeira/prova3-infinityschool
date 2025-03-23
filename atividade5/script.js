
const tarefas = [];

// Função para adicionar uma tarefa
function adicionarTarefa(tarefa) {
  tarefas.push(tarefa);
  console.log(`Tarefa "${tarefa}" adicionada.`);
}

// Função para listar as tarefas
function listarTarefas() {
  if (tarefas.length === 0) {
    console.log("Não há tarefas na lista.");
  } else {
    console.log("Lista de tarefas:");
    for (let i = 0; i < tarefas.length; i++) {
      console.log(`${i + 1}: ${tarefas[i]}`);
    }
  }
}

// Função para remover uma tarefa
function removerTarefa(indice) {
  if (indice >= 1 && indice <= tarefas.length) {
    const tarefaRemovida = tarefas.splice(indice - 1, 1)[0];
    console.log(`Tarefa "${tarefaRemovida}" removida.`);
  } else {
    console.log("Índice inválido.");
  }
}

// Função para concluir uma tarefa
function concluirTarefa(indice) {
  if (indice >= 1 && indice <= tarefas.length) {
    tarefas[indice - 1] = `✅ ${tarefas[indice - 1]}`;
    console.log("Tarefa concluída!");
  } else {
    console.log("Índice inválido.");
  }
}

// Loop principal para interação contínua
while (true) {
  console.log("\nOpções:");
  console.log("1. Adicionar tarefa");
  console.log("2. Listar tarefas");
  console.log("3. Remover tarefa");
  console.log("4. Concluir tarefa");
  console.log("5. Sair");

  const opcao = prompt("Escolha uma opção de 1 a 5, sendo 5 sair:");

  switch (opcao) {
    case "1":
      const novaTarefa = prompt("Digite o nome da tarefa:");
      if (novaTarefa) {
        adicionarTarefa(novaTarefa);
      }
      break;
    case "2":
      listarTarefas();
      break;
    case "3":
      const indiceRemover = parseInt(prompt("Digite o índice da tarefa a remover:"));
      if (!isNaN(indiceRemover)) {
        removerTarefa(indiceRemover);
      } else {
        console.log("Índice inválido.");
      }
      break;
    case "4":
      const indiceConcluir = parseInt(prompt("Digite o índice da tarefa a concluir:"));
      if (!isNaN(indiceConcluir)) {
        concluirTarefa(indiceConcluir);
      } else {
        console.log("Índice inválido.");
      }
      break;
    case "5":
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida.");
  }

  if (opcao === "5") {
    break;
  }
}
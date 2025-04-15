// Lista de tarefas
let tarefas = [];

// Adicionar tarefas
let adicionarTarefa = function (tarefa) {
  tarefas.push({ descricao: tarefa, concluida: false });
  console.log(`Tarefa adicionada: "${tarefa}"`);
};

// Arrow function para listar tarefas
let listarTarefas = () => {
  console.log("Lista de Tarefas:");
  tarefas.forEach((tarefa, index) => {
    let status = tarefa.concluida ? "Concluída" : "Pendente";
    console.log(`${index}: ${tarefa.descricao} - ${status}`);
  });
};

// Recebe callback para executar ação
function gerenciarTarefas(callback) {
  callback();
}

// Funções de callback
function removerTarefa() {
  let index = parseInt(prompt("Digite o índice da tarefa a ser removida:"));
  if (index >= 0 && index < tarefas.length) {
    let removida = tarefas.splice(index, 1);
    console.log(`Tarefa removida: "${removida[0].descricao}"`);
  } else {
    console.log("Índice inválido.");
  }
}

function atualizarTarefa() {
  let index = parseInt(prompt("Digite o índice da tarefa a ser atualizada:"));
  if (index >= 0 && index < tarefas.length) {
    let novaDescricao = prompt("Digite a nova descrição da tarefa:");
    tarefas[index].descricao = novaDescricao;
    console.log(`Tarefa atualizada para: "${novaDescricao}"`);
  } else {
    console.log("Índice inválido.");
  }
}

function concluirTarefa() {
  let index = parseInt(prompt("Digite o índice da tarefa a ser concluída:"));
  if (index >= 0 && index < tarefas.length) {
    tarefas[index].concluida = true;
    console.log(`Tarefa "${tarefas[index].descricao}" marcada como concluída.`);
  } else {
    console.log("Índice inválido.");
  }
}

// Loop principal para interação com o usuário
function iniciarGerenciador() {
  let opcao;
  do {
    opcao = prompt(
      "Escolha uma opção:\n" +
        "1 - Adicionar tarefa\n" +
        "2 - Listar tarefas\n" +
        "3 - Remover tarefa\n" +
        "4 - Atualizar tarefa\n" +
        "5 - Concluir tarefa\n" +
        "0 - Sair"
    );

    switch (opcao) {
      case "1":
        let novaTarefa = prompt("Digite a descrição da nova tarefa:");
        adicionarTarefa(novaTarefa);
        break;
      case "2":
        listarTarefas();
        break;
      case "3":
        gerenciarTarefas(removerTarefa);
        break;
      case "4":
        gerenciarTarefas(atualizarTarefa);
        break;
      case "5":
        gerenciarTarefas(concluirTarefa);
        break;
      case "0":
        console.log("Saindo do gerenciador de tarefas...");
        break;
      default:
        console.log("Opção inválida.");
    }
  } while (opcao !== "0");
}

iniciarGerenciador();

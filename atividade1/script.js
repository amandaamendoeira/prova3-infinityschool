
let listaDeCompras = [];


function adicionarItem(item) {
  listaDeCompras.push(item);
  console.log(`${item} adicionado à lista de compras.`);
}

function removerItem(indice) {
  if (indice >= 0 && indice < listaDeCompras.length) {
    const itemRemovido = listaDeCompras.splice(indice, 1)[0];
    console.log(`${itemRemovido} removido da lista de compras.`);
  } else {
    console.log("Índice inválido.");
  }
}


function exibirLista() {
  console.log("Lista de Compras:");
  for (const [indice, item] of listaDeCompras.entries()) {
    console.log(`${indice}: ${item}`);
  }
}

function atualizarItem(indice, novoValor) {
  if (indice >= 0 && indice < listaDeCompras.length) {
    listaDeCompras[indice] = novoValor;
    console.log(`Item no índice ${indice} atualizado para ${novoValor}.`);
  } else {
    console.log("Índice inválido.");
  }
}

// Exemplos de uso
adicionarItem("Maçãs");
adicionarItem("Pão");
adicionarItem("Leite");

exibirLista();

removerItem(1);

exibirLista();

atualizarItem(0, "Bananas");

exibirLista();
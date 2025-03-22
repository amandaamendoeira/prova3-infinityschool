
const nomes = [];

while (true) {
  const nome = prompt("Digite um nome (ou 'sair' para encerrar):");

  if (nome && nome.toLowerCase() === "sair") {
    break;
  }

  if (nome) {
    nomes.push(nome);
  } else {
    console.log("Entrada inválida. Por favor, digite um nome.");
  }
}

console.log("\nLista de nomes com índices:");
for (let i = 0; i < nomes.length; i++) {
  console.log(`${i + 1}: ${nomes[i]}`);
}

console.log("\nSaudações personalizadas:");
for (const nome of nomes) {
  console.log(`Bem-vindo(a), ${nome}!`);
}
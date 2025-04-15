/////////// Lista inicial de nomes
let listaDeNomes = [];

/////////// Adicionar nomes à lista
function adicionarNome(nome) {
  listaDeNomes.push(nome);
  console.log(`Nome "${nome}" adicionado! Lista atual:`, listaDeNomes);
}

/////////// Filtrar nomes que começam com uma letra específica
function filtrarNomes(letra) {
  const nomesFiltrados = listaDeNomes.filter(
    (nome) => nome[0].toLowerCase() === letra.toLowerCase()
  );
  console.log(`Nomes que começam com a letra "${letra}":`, nomesFiltrados);
}

/////////// Buscar um nome específico
function buscarNome(nome) {
  const nomeEncontrado = listaDeNomes.find(
    (n) => n.toLowerCase() === nome.toLowerCase()
  );
  if (nomeEncontrado) {
    console.log(`Nome encontrado: ${nomeEncontrado}`);
  } else {
    console.log(`Nome "${nome}" não encontrado.`);
  }
}

/////////// Transformar todos os nomes em letras maiúsculas
function transformarNomes() {
  const nomesTransformados = listaDeNomes.map((nome) => nome.toUpperCase());
  console.log("Nomes transformados para maiúsculas:", nomesTransformados);
}

/////////// Verificar se todos os nomes têm mais de três caracteres
function verificarCondicao() {
  const resultado = listaDeNomes.every((nome) => nome.length > 3);
  console.log("Todos os nomes têm mais de três caracteres?", resultado);
}

/////////// Loop de interação com o usuário
function interagir() {
  let continuar = true;

  while (continuar) {
    let escolha = prompt(
      `Escolha uma operação:\n` +
        `1. Adicionar nome\n` +
        `2. Filtrar nomes\n` +
        `3. Buscar nome\n` +
        `4. Transformar nomes para maiúsculas\n` +
        `5. Verificar condição de nomes\n` +
        `6. Sair`
    );

    switch (escolha) {
      case "1":
        let nomeAdicionar = prompt("Digite o nome para adicionar à lista:");
        adicionarNome(nomeAdicionar);
        break;

      case "2":
        let letraFiltro = prompt("Digite a letra para filtrar nomes:");
        filtrarNomes(letraFiltro);
        break;

      case "3":
        let nomeBuscar = prompt("Digite o nome para buscar na lista:");
        buscarNome(nomeBuscar);
        break;

      case "4":
        transformarNomes();
        break;

      case "5":
        verificarCondicao();
        break;

      case "6":
        console.log("Saindo");
        continuar = false;
        break;

      default:
        console.log("Opção inválida, tente novamente.");
    }
  }
}

interagir();

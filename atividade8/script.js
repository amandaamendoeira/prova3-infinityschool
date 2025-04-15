/////////// Definindo a classe Livro
class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  /////////// Método para exibir informações do livro
  exibirInformacoes() {
    return `Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}`;
  }
}

/////////// Array para armazenar os livros na biblioteca
let biblioteca = [];

/////////// Função para adicionar novos livros à biblioteca
function adicionarLivro(titulo, autor, ano) {
  const novoLivro = new Livro(titulo, autor, ano);
  biblioteca.push(novoLivro);
}

/////////// Função para buscar um livro pelo título
function buscarLivro(titulo) {
  const livroEncontrado = biblioteca.find(
    (livro) => livro.titulo.toLowerCase() === titulo.toLowerCase()
  );
  if (livroEncontrado) {
    console.log(livroEncontrado.exibirInformacoes());
  } else {
    console.log(`Livro não encontrado.`);
  }
}

/////////// Função para listar todos os livros da biblioteca
function listarLivros() {
  if (biblioteca.length === 0) {
    console.log("A biblioteca está vazia.");
  } else {
    for (let livro of biblioteca) {
      console.log(livro.exibirInformacoes());
    }
  }
}

/////////// Função para calcular a média de idade dos livros
function calcularMediaIdadeLivros() {
  const anoAtual = new Date().getFullYear();
  const somaIdadeLivros = biblioteca.reduce(
    (soma, livro) => soma + (anoAtual - livro.ano),
    0
  );
  const mediaIdade = somaIdadeLivros / biblioteca.length;
  console.log(`Média de idade dos livros: ${mediaIdade.toFixed(2)} anos.`);
}

/////////// Testando o programa

/////////// Adicionando livros à biblioteca
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
adicionarLivro("Dom Casmurro", "Machado de Assis", 1899);
adicionarLivro("1984", "George Orwell", 1949);

/////////// Listando todos os livros
console.log("Livros na biblioteca:");
listarLivros();

/////////// Buscando um livro pelo título
console.log("\nBuscando livro '1984':");
buscarLivro("1984");

console.log("\nBuscando livro 'Harry Potter':");
buscarLivro("Harry Potter");

/////////// Calculando a média de idade dos livros
console.log("\nEstatísticas:");
calcularMediaIdadeLivros();

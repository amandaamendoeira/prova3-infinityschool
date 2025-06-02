// Classe Produto com propriedades e método para exibir detalhes
class Produto {
    constructor(nome, preco, categoria) {
      this.nome = nome;
      this.preco = preco;
      this.categoria = categoria;
    }
  
    exibirDetalhes() {
      console.log(`Nome: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}, Categoria: ${this.categoria}`);
    }
  }
  
  // Lista para armazenar os produtos
  const listaProdutos = [];
  
  // Função para adicionar produto
  function adicionarProduto(nome, preco, categoria) {
    const produto = new Produto(nome, preco, categoria);
    listaProdutos.push(produto);
    console.log("Produto adicionado com sucesso!");
  }
  
  // Função para listar todos os produtos
  function listarProdutos() {
    console.log("Lista de Produtos:");
    listaProdutos.forEach(produto => produto.exibirDetalhes());
  }
  
  // Função para buscar produto por nome
  function buscarProduto(nome) {
    const encontrado = listaProdutos.find(produto => produto.nome.toLowerCase() === nome.toLowerCase());
    if (encontrado) {
      console.log("Produto encontrado:");
      encontrado.exibirDetalhes();
    } else {
      console.log("Produto não encontrado.");
    }
  }
  
  // Função para filtrar produtos por categoria
  function filtrarPorCategoria(categoria) {
    const filtrados = listaProdutos.filter(produto => produto.categoria.toLowerCase() === categoria.toLowerCase());
    console.log(`Produtos da categoria "${categoria}":`);
    filtrados.forEach(produto => produto.exibirDetalhes());
  }
  
  // Função para exibir resumo estatístico
  function resumoEstatistico() {
    const total = listaProdutos.reduce((soma, produto) => soma + produto.preco, 0);
    console.log(`Total em estoque: R$ ${total.toFixed(2)}`);
  }
  
  // Exemplo de uso
  
  adicionarProduto("Notebook", 3500.00, "Informática");
  adicionarProduto("Teclado", 150.00, "Informática");
  adicionarProduto("Cafeteira", 250.00, "Eletrodomésticos");
  
  listarProdutos();
  
  buscarProduto("Teclado");
  
  filtrarPorCategoria("Informática");
  
  resumoEstatistico();
  
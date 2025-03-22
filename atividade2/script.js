// Solicita ao usuário dois números
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

// Verifica se as entradas são números válidos
if (!numero1 || !numero2) {
  console.log("Entrada inválida. Por favor, insira números.");
} else {
  // Realiza as operações aritméticas básicas
  let soma = numero1 + numero2;
  let subtracao = numero1 - numero2;
  let multiplicacao = numero1 * numero2;
  let divisao = numero1 / numero2;
  let resto = numero1 % numero2;

  // Exibe os resultados no console
  console.log("Resultados:");
  console.log("Soma:", soma);
  console.log("Subtração:", subtracao);
  console.log("Multiplicação:", multiplicacao);
  console.log("Divisão:", divisao);
  console.log("Resto:", resto);

  // Utiliza operadores de atribuição para atualizar/reatribuir os valores
  numero1 += numero2; // numero1 agora é a soma
  console.log("Número 1 após adição:", numero1);

  numero1 -= numero2; // numero1 volta ao valor original
  console.log("Número 1 após subtração:", numero1);

  numero1 *= numero2; // numero1 agora é a multiplicação
  console.log("Número 1 após multiplicação:", numero1);

  numero1 /= numero2; // numero1 volta ao valor original
  console.log("Número 1 após divisão:", numero1);

  numero1 %= numero2; // numero1 agora é o resto
  console.log("Número 1 após resto:", numero1);
}
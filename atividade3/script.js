const idade = parseInt(prompt("Digite sua idade:"));
const statusRegistro = prompt("Digite seu status de registro (registrado ou não registrado):").toLowerCase();

if (!idade) {
  console.log("Idade inválida. Por favor, insira um número.");
} else {

  const mensagemIdade = idade >= 18 ? "Maior de idade" : "Menor de idade";
  
  let mensagemStatus;
  switch (statusRegistro) {
    case "registrado":
      mensagemStatus = "Bem-vindo!";
      break;
    case "não registrado":
      mensagemStatus = "Por favor, complete seu registro.";
      break;
    default:
      mensagemStatus = "Status desconhecido.";
  }
  
  const mensagemAcesso = idade >= 18 && statusRegistro === "registrado" ? "Acesso completo concedido." : "Acesso limitado.";

  console.log(mensagemIdade);
  console.log(mensagemStatus);
  console.log(mensagemAcesso);
}
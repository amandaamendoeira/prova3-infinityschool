document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();
  
    limparMensagens();
  
    const nome = document.getElementById("nome").value.trim();
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const email = document.getElementById("email").value.trim();
    const dataNascimento = document.getElementById("idade").value;
  
    try {
      validarCadastro({ nome, usuario, senha, email, dataNascimento });
      document.getElementById("mensagem-sucesso").textContent = "Cadastro realizado com sucesso!";
    } catch (erro) {
      if (erro.campo && erro.mensagem) {
        const erroElemento = document.getElementById(`erro-${erro.campo}`);
        if (erroElemento) {
          erroElemento.textContent = erro.mensagem;
        }
      } else {
        alert("Erro inesperado: " + erro.message);
      }
    }
  });
  
  function validarCadastro(dados) {
    if (!dados.nome) {
      lançarErro("nome", "O campo Nome é obrigatório.");
    }
    if (!dados.usuario) {
      lançarErro("usuario", "O campo Usuário é obrigatório.");
    }
    if (!dados.senha) {
      lançarErro("senha", "O campo Senha é obrigatório.");
    } else if (dados.senha.length < 6) {
      lançarErro("senha", "A senha deve ter pelo menos 6 caracteres.");
    }
    if (!dados.email) {
      lançarErro("email", "O campo Email é obrigatório.");
    } else if (!validarEmail(dados.email)) {
      lançarErro("email", "Email inválido.");
    }
    if (!dados.dataNascimento) {
      lançarErro("idade", "O campo Data de Nascimento é obrigatório.");
    } else if (!maiorOuIgual18(dados.dataNascimento)) {
      lançarErro("idade", "Você deve ter pelo menos 18 anos.");
    }
  }
  
  function lançarErro(campo, mensagem) {
    const erro = new Error(mensagem);
    erro.campo = campo;
    erro.mensagem = mensagem;
    throw erro;
  }
  
  function limparMensagens() {
    document.querySelectorAll(".erro").forEach(el => el.textContent = "");
    document.getElementById("mensagem-sucesso").textContent = "";
  }
  
  function validarEmail(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  }
  
  function maiorOuIgual18(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade >= 18;
  }
  
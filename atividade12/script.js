// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
    const inputTitulo = document.getElementById("tituloNota");
    const botaoAdicionar = document.getElementById("btnAdicionar");
    const listaNotas = document.getElementById("listaNotas");
  
    let notas = JSON.parse(localStorage.getItem("notas")) || [];
  
    // Atualiza a lista visualmente
    function exibirNotas() {
      listaNotas.innerHTML = "";
  
      notas.forEach((nota, index) => {
        const li = document.createElement("li");
        li.textContent = nota.titulo;
  
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.addEventListener("click", () => {
          notas.splice(index, 1);
          salvarNotas();
          exibirNotas();
        });
  
        li.appendChild(btnRemover);
        listaNotas.appendChild(li);
      });
    }
  
    // Salva as notas no localStorage
    function salvarNotas() {
      localStorage.setItem("notas", JSON.stringify(notas));
    }
  
    // Adiciona nova nota
    botaoAdicionar.addEventListener("click", () => {
      const titulo = inputTitulo.value.trim();
  
      if (titulo === "") {
        alert("O título da nota não pode estar vazio.");
        return;
      }
  
      // Verifica se o título já existe
      if (notas.some(nota => nota.titulo === titulo)) {
        alert("Já existe uma nota com esse título.");
        return;
      }
  
      notas.push({ titulo });
      salvarNotas();
      exibirNotas();
      inputTitulo.value = "";
    });
  
    // Carrega as notas ao abrir a página
    exibirNotas();
  });
  

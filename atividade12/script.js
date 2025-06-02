document.addEventListener('DOMContentLoaded', () => {
  const inputNota = document.getElementById('tituloNota');
  const btnAdicionar = document.getElementById('btnAdicionar');
  const listaNotas = document.getElementById('listaNotas');
  const btnLimparTudo = document.getElementById('btnLimparTudo');

  let notas = JSON.parse(localStorage.getItem('notas')) || [];

  function salvarNotas() {
    localStorage.setItem('notas', JSON.stringify(notas));
  }

  function exibirNotas() {
    listaNotas.innerHTML = '';

    notas.forEach((nota, index) => {
      const li = document.createElement('li');
      li.textContent = nota.titulo;

      const btnRemover = document.createElement('button');
      btnRemover.textContent = 'Remover';
      btnRemover.addEventListener('click', () => {
        notas.splice(index, 1);
        salvarNotas();
        exibirNotas();
      });

      li.appendChild(btnRemover);
      listaNotas.appendChild(li);
    });
  }

  btnAdicionar.addEventListener('click', () => {
    const titulo = inputNota.value.trim();

    if (titulo === '') {
      alert('Digite um título para a nota!');
      return;
    }

    notas.push({ titulo });
    salvarNotas();
    exibirNotas();
    inputNota.value = '';
  });

  btnLimparTudo.addEventListener('click', () => {
    if (confirm('Tem certeza que deseja apagar todas as notas?')) {
      notas = [];
      localStorage.removeItem('notas');
      exibirNotas();
    }
  });

  exibirNotas();
});

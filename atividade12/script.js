const inputTitulo = document.getElementById('tituloNota');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaNotas = document.getElementById('listaNotas');

function carregarNotas() {
  listaNotas.innerHTML = '';

  const notas = JSON.parse(localStorage.getItem('notas')) || [];

  notas.forEach(nota => {
    const li = document.createElement('li');
    li.textContent = nota.titulo;

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.classList.add('btn-remove');

    btnRemover.addEventListener('click', () => {
      removerNota(nota.titulo);
    });

    li.appendChild(btnRemover);
    listaNotas.appendChild(li);
  });
}

function adicionarNota(titulo) {
  if (!titulo) {
    alert('Por favor, insira um título para a nota.');
    return;
  }

  let notas = JSON.parse(localStorage.getItem('notas')) || [];

  if (notas.some(nota => nota.titulo.toLowerCase() === titulo.toLowerCase())) {
    alert('Já existe uma nota com esse título. Use outro título.');
    return;
  }

  notas.push({ titulo });
  localStorage.setItem('notas', JSON.stringify(notas));
  carregarNotas();
}

function removerNota(titulo) {
  let notas = JSON.parse(localStorage.getItem('notas')) || [];
  notas = notas.filter(nota => nota.titulo !== titulo);
  localStorage.setItem('notas', JSON.stringify(notas));
  carregarNotas();
}

btnAdicionar.addEventListener('click', () => {
  const titulo = inputTitulo.value.trim();
  adicionarNota(titulo);
  inputTitulo.value = '';
  inputTitulo.focus();
});

carregarNotas();

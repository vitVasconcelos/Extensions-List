const estilo = document.querySelector('.css-pagina');
const imagemBotao = document.querySelector('.img-botao');
let ligado = false;

function mudarTema() {
  if (!ligado) {
    imagemBotao.src = "./src/imagens/icon-moon.svg";
    estilo.href = "./src/css/estilos-claro.css";
    ligado = true;
  } else {
    imagemBotao.src = "./src/imagens/icon-sun.svg";
    estilo.href = "./src/css/estilos.css";
    ligado = false;
  }
}

function mostrarAtivos() {
  const switches = document.querySelectorAll('.toggle');
  let algumVisivel = false;

  switches.forEach(sw => {
    const li = sw.closest('li');
    if (sw.checked) {
      li.style.display = 'grid';
      algumVisivel = true;
    } else {
      li.style.display = 'none';
    }
  });

  ajustarLayoutVazio(algumVisivel);
}

function mostrarInativos() {
  const switches = document.querySelectorAll('.toggle');
  let algumVisivel = false;

  switches.forEach(sw => {
    const li = sw.closest('li');
    if (!sw.checked) {
      li.style.display = 'grid';
      algumVisivel = true;
    } else {
      li.style.display = 'none';
    }
  });

  ajustarLayoutVazio(algumVisivel);
}

function mostrarTodos() {
  const switches = document.querySelectorAll('.toggle');

  switches.forEach(sw => {
    const li = sw.closest('li');
    li.style.display = 'grid';
  });

  ajustarLayoutVazio(true); 
}
function ajustarLayoutVazio(algumVisivel) {
    const listas = document.querySelector('.listas');
    
    if (!algumVisivel) {
      listas.classList.add('vazio');
    } else {
      listas.classList.remove('vazio');
    }
  }
  
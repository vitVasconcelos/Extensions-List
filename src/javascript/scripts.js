const estilo = document.querySelector('.css-pagina');
const imagemBotao = document.querySelector('.img-botao')
let ligado = false;


function mudarTema(){
    if(ligado == false){
        imagemBotao.src ="/src/imagens/icon-moon.svg"
        estilo.href = "/src/css/estilos-claro.css";
        ligado = true;
    }
    else{
        imagemBotao.src = "/src/imagens/icon-sun.svg"
        estilo.href ="/src/css/estilos.css";
        ligado = false;
    }
}
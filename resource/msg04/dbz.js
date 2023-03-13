function rolarPagina(pixels){
    document.documentElement.scrollTop += pixels;
}
const velocidadeMusica = 134;
const rolagem = 4;

const intervaloRolagem = setInterval(() => {
    rolarPagina(rolagem);
}, velocidadeMusica
);
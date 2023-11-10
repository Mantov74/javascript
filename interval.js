let contador = 10;
console.log(contador);
function atualizarContagem(){
    contador--;
    console.log(contador);
    if (contador === 0){
        clearInterval(intervalId);
        console.log("Contagem regessiva concluída!");
    }
}

const intervalId = setInterval(atualizarContagem, 1000);
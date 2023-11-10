let NumeroAleatorio =  Math.floor(Math.random() * 10) + 1;
let palpite;
while (true) {
    palpite = parseInt(prompt("Adivinhe um número entre 1 e 10:"));
    if (palpite === NumeroAleatorio){
        alert("Parabéns ! Você acertou.");
        break;
    }else{
        alert("Tente novamente!");
    }
}
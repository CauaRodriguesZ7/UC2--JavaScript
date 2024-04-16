const readline = require("readline-sync");

let numDigitado = 0;

console.log("Usuário, digite um valor: " );
numDigitado = parseFloat(readline.question());

if(numDigitado > 10){
    console.log("o número é maior que 10!");
}else{
    console.log("Numero MENOR que 10...");
}

//fim do programa!
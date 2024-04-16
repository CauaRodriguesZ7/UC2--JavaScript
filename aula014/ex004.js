/* Faça um programa para calcular o índice de massa
corporal (IMC) de uma pessoa e mostre sua classificação de
acordo com a tabela. Para calcular o IMC use a seguinte
equação:
*/

const readline = require("readline-sync")
let massa = 0
let altura = 0
let soma = 0 

console.log("Usuário, digite seu peso em kilogramas:");
massa = parseFloat(readline.question());
console.log("Usuário, digite sua altura em metros.");
altura = parseFloat(readline.question());
soma = massa / altura**2

if (soma <= 16){
    console.log('A sua categoria é MAGREZA GRAVE!');
}else if (soma >16 && soma <= 16.9 ){
    console.log("A sua categoria é MAGREZA MODERADA!");
}else if (soma >17 && soma <= 18.4){
    console.log("A sua categoria é MAGREZA LEVE!");
} else if (soma >18.5 && soma <=24.9){
    console.log("A sua categoria é PESO ADEQUADO");
} else if (soma >25 && soma <=29.9){
    console.log("A sua categoria é PRÉ-OBESIDADE");
} else if (soma >30 && soma <=34.9){
    console.log("A sua categoria é OBESIDADE LEVE!");
} else if (soma >35 && soma <= 39.9){
    console.log("A sua categoria é OBESIDADE SEVERA!");
} else if(soma <40 ){
    console.log("A sua categoria é OBESIDADE MÓRBIDA!");
}
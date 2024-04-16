/* 
3. Escreva um programa que a partir da informação da
idade de um nadador, efetue a classificação do mesmo
em uma das categorias especificadas na tabela abaixo
*/

const readline = require("readline-sync")
let idade = readline.questionFloat("Digite sua idade:");


if(idade >5 && idade <= 7){
    console.log("Você é INFANTIL A!");
}else if(idade>=8 && idade <=10){
    console.log("Voce é INFANTIL B!");
}else if(idade >=11 && idade <=13){
    console.log("Você é JUVENIL A!");
} else if(idade >=14 && idade <=17){
    console.log("voce é JUVENIL B!");
} else {
    console.log("Você é ADULTO")
}
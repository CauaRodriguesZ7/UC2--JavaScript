/* 
 Desenvolva um algoritmo utilizando a linguagem Javascript, para calcular a média das notas de avaliações
de um aluno do ensino técnico. O programa deverá receber as notas da 1a. e da 2a. avaliação; calcular a média
aritmética simples e escrever, na tela do console, além do valor da média final, uma mensagem que diga se o
aluno foi ou não aprovado (considerar que média maior ou igual a 6.0 o aluno é aprovado).
*/

const readline = require("readline-sync")

//declrar variaeis
let media = 0
let nota1 = 0
let nota2 = 0


console.log("Digite sua primeira nota:");
nota1 = parseFloat(readline.question());
console.log("Digite sua segunda nota:");
nota2 = parseFloat(readline.question());

media = (nota1 + nota2) / 2

if (media >= 6.0){ 
    console.log('A sua pntuação foi de:' + media + "Você atingiu a média.");

}else if(media < 6.0)
    
    console.log('A sua pontuação foi de:' + media + "Você não atingiu a média esperada.");


/* Escreva um programa/algoritmo que faça a leitura do ano de nascimento de uma pessoa e informe a ela se
poderá iniciar a preparação para dirigir. (Não é necessário considerar o mês de nascimento da pessoa).
Considere o ano atual como 2023
*/

const readline = require("readline-sync")

//declarar variaveis
let anoAtual = 2023
let idade = 0
let sub = 0

//obter infomacoes do usuario
console.log("Usuário, digite o ano que você nasceu.");
idade = parseFloat(readline.question());

//fazer operação
sub = anoAtual - idade

if (sub >= 18){
    console.log("você ja esta autorizado a dirigir!");
}

else {
    console.log("você não tem a idade miníma para dirigir.");
}
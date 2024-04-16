/*  
Implemente um programa em JS que verifique
se o nuemro digitado pelo usuário é positivo ou negativo
(considere o valor zero como positivo).
A informação (resultado) deve ser apresntado ao usuario.
*/

const readline = require("readline-sync")

let num = 0 

console.log("Usuario, digite um valor: ");
numDigitado = parseFloat(readline.question());

if(numDigitado > 0){
    console.log("o valor é POSITIVO!");
}else{
    console.log("numero NEGATIVO...");
}

/*
A nota final de um estudante é calculada a partir de três notas atribuídas, respectivamente, a um trabalho
de laboratório, a uma avaliação semestral e a um exame final. A média das três notas mencionadas
anteriormente os seguintes pesos: Trabalho de laboratório: 2; Avaliação semestral: 3; Exame final: 5. Calcule
a média obtida pelo aluno e, de acordo com o resultado, mostre se o aluno está reprovado (média entre 0 e
2,9), de recuperação (média entre 3 e 4,9) ou aprovado (média maior ou igual a 5).
*/

const readline = require("readline-sync")

let nota1 = 0
let nota2 = 0
let nota3 = 0
let media = 0

console.log("Digite sua nota do trabalho:");
nota1 = parseFloat(readline.question());
console.log("Digite sua nota da avaliação semestral:");
nota2 = parseFloat(readline.question());
console.log("Digite sua nota do examine:");
nota3 = parseFloat(readline.question());

media = (nota1*0.2) + (nota2*0.3) + (nota3*0.5)

if (media >= 0 && media <= 2.9 ){
    console.log("Voce foi REPROVADO!");
}else if (media >3 && media <= 4.9){
    console.log('Voce ficou de recuperação!');
}else if (media >= 5){
    console.log("Você foi APROVADO!")
}



const readline = require("readline-sync")

//declarar variaveis 
let pesoIdeal = 0
let altura = 0

console.log("Usuario, digite o valor da sua altura: ")
altura = parseFloat(readline.question())
pesoIdeal = 52 + 0.67 * (altura = 152.4)
console.log("O seu peso ideal é: " )


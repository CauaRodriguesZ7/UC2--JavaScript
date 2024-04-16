const readline = require("readline-sync")
let valor1 = 0
let valor2 = 1
let subtracao = 0

console.log("usuario, digite um valor?")
valor1 = parseInt(readline.question())
subtracao = valor1 - valor2
console.log("o resultado é: " + subtracao)
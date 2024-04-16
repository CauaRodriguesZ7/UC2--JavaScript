const readline = require("readline-sync")
let base = 0
let altura = 0
let mult = 0

console.log("usuário, digite o valor da base(cm):")
base = parseInt(readline.question())
console.log("Usuário, digite o valor da altura(cm):")
altura = parseInt(readline.question())

mult = base * altura

console.log("O valor é:" + mult)
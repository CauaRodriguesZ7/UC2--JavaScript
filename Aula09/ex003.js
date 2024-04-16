//declarar variaveis

const readline = require("readline-sync")
let anos = 0
let dias= 365
let meses = 30
let mult = 0
let multiplicacao = 0

console.log("Usuário digite a sua idade em anos:")
anos = parseFloat(readline.question())

mult = anos * dias
console.log("Seus dias ma terra:" + mult)

multiplicacao = mult / meses
console.log("Seus meses na Terra:" + multiplicacao)
//declarar variveis 
const readline = require("readline-sync")
let produto = 0 
let desconto = 0
let final  = 0
let valorDescont

//solicitar imformacoes do usuario
console.log("Informe o valor do produto: ")
produto = parseFloat(readline.question())

console.log("Informe o valor do desconto: ")
desconto = parseFloat(readline.question())

//processamento dos dados
valorDescont = produto * (desconto/100)
final = produto - desconto

//apresentar resultados
console.log("O valor do desconto será de: " + desconto)
console.log("O valor final do produto será de: " + final)
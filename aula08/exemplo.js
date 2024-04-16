//importar as funcionalidades de captura de informacao do teclado
const readline = require("readline-sync")
let valor1 = 0
let valor2 = 0
let soma = 0

//capturar informacoes do usuario
console.log("Usuaário, digite um valor:")
valor1 = parseFloat(readline.question())

// .question()- capturar imformacoes do teclado, ate a digitacao do 'enter'
console.log("usuário, digite um segundo valor:")
valor2 = parseFloat(readline.question())
//parseInt() -> altera de string para inteiro 
//parseFloat() -> altra string para real

soma = valor1 + valor2
console.log("o resultado da soma:" + soma)

 


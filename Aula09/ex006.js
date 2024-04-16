/*
Escreva um algoritmo que faça a leitura de um sensor de temperatura na escala Fahrenheit (dados
imputados pelo usuário através do teclado), calcule e apresente o valor correspondente à escala Celsius. Dado:
°C = 5*(°F-32) / 9 . Obs: Para testar se a sua resposta está correta saiba que 100°C = 212°F
*/

const readline = require("readline-sync")

//declarar variaveis
let fahrenHeit = 0
let resultado = 0 

console.log("Usuário, digite o valor de c(graus): ")
fahrenHeit = parseFloat(readline.question())
resultado = 5 + (fahrenHeit - 32) / 9

console.log("O valor é: " + resultado)





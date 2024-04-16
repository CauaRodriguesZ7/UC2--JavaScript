/*
O preço de um automóvel, é a soma do custo de fabricação com o lucro do revendedor e os impostos
recolhidos. Supondo que o percentual do revendedor seja de 28% e os impostos 45%, implemente um
programa que receba o custo de fabricação de um carro, calcule e apresente na tela os valores atribuídos ao
revendedor e de impostos, além do valor final do automóvel ao consumidor
*/

const readline = require("readline-sync")

//declaração das variaveis 
let valorFinalCarro = 0              //variavel que recebe o valor calculado do carro
let valorInicial = 0                 //variavel que recebe o valot digitado pelo usuario
let imposto = 45                     // imposto é de 45% (ordenado do exercicio)
let lucroDistribuidor = 28           //lucro do revendedor 

//adquirir dados do usuario
console.log("Usuário, digite o valor inicial do carro:" )
valorInicial = parseFloat(readline.question())

//processar os dados 
valorFinalCarro = valorInicial + (valorInicial*(imposto/100)) + (valorInicial*(lucroDistribuidor/100))

//Apresentar dados ao usuario
console.log("O valor da revenda será de: " + (valorInicial))
console.log("O valor de imposto será de: " + (valorInicial*(imposto/100)))
console.log("O valor final do carro é de: " + valorFinalCarro) //valor final do carro


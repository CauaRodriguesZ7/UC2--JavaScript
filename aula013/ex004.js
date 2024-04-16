/* 
em uma feira de rua, um comerciante anuncia a venda de maçãs ao valor de $1,70 cada,
se forem compradas quantidades menores que uma dúzia.
E $1,20 cada se forem compradas no minimo 12 unidades.
Escreva um programa que leia o numero de macas compradas, calcule e escreva o valor total da compra. 
*/

//atribuir 
const readline = require("readline-sync")

//declarar variaveis 
let macas = 0
let preco = 0
let desconto = 0

//processar as informações do usuario
console.log("Usuario, digite a quantidade de maçãs desejadas.")
preco = parseFloat(readline.question())

 
if(macas >= 12){


    preco = macas * 1.20
    console.log("O valor será de:" + preco)


}else if(macas < 12){

    desconto = macas * 1.70
    console.log("O valor do desconsto será de:" + desconto)

}


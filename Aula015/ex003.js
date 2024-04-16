/*
Faça um programa que leia um número inteiro e verifique se o mesmo é par ou ímpar. Dica: utilize a função
resto de divisão (%). Pesquise na internet a respeito deste operador.
*/

const readline = require("readline-sync")

let num = 0

console.log("Digite um numero:")
num = parseFloat(readline.question())

if (num %2 == 0){
    console.log("o número é PAR!")
} 
else {
    console.log("Seu numero é IMPAR!")
}

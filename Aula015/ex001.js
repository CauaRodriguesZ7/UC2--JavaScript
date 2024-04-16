/*
 Faça um programa que recebe o valor do salário de um trabalhador e o valor de um empréstimo. Se a
prestação for maior que 20% do salário imprima "Empréstimo não concedido", caso contrário imprima
"Empréstimo autorizado"
*/

const readline = require("readline-sync")

//variveis
let salario = 0
let emprestimo = 0
let limite = 0

//obter dados do usuario
console.log("Usuário, digite o seu salário:");
salario = parseFloat(readline.question());
console.log("Usuário, agora digite qual o valor do empréstimo desejado:");
emprestimo = parseFloat(readline.question());

limite = salario * 0.2

if (limite >= 20){
    console.log('Seu empréstimo foi de:' + limite + "Seu emprestimo foi aprovado!");

} else if(limite < 20){
    console.log('Seu emprestimo foi de:' + limite + "Seu emprestimo foi negado.");
}
    
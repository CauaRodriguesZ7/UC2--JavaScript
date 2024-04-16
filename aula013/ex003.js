const readline = require("readline-sync")

let num = 0

console.log("Usuario, digite um valor: ");
num = parseFloat(readline.question());

if(num > 0){
    console.log("POSTIVO")
}else if(num < 0) {
    console.log("NEGATIVO")
}else{
    console.log("É ZERO!")
}
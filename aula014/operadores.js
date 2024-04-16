const readline = require("readline-sync");
let idade = readline.questionFloat("Digite sua idade:");

if(idade >0 && idade <= 12){
    console.log("Você é criança!");
}else if(idade>=13 && idade <=18){
    console.log("Voce é adolescente!");
}else if(idade >=19 && idade <=65){
    console.log("Você é adulto!");
} else{
    console.log("voce é idoso!")
}
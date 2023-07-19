//4. Faça um programa que imprima na tela a tabuada de um número ate o 10

let prompt = require("prompt-sync")();

let i= parseInt(prompt("Digite um numero: "))
for (let n = 0; n <= 10; n +=1){
    
    console.log(`${n} x ${i} = ${n*i}`)
}
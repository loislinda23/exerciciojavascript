//10. Faça um programa que receba um número do usuário e continue
//a pedir o número se o numero for diferente de 0.
let prompt = require ("prompt-sync")()
//while
let numero = parseFloat(prompt("Digite um numero"))
while(numero != 0){
    numero = parseFloat(prompt("Digite um numero"))

}
//while
//let numero = parseFloat(prompt("Digite um numero"))
//while(numero != 0){
    //numero =parseFloat(prompt("Digite um numero"))
//}
// do while
do{
    numero = parseFloat(prompt("Digite um numero: "))
}while(numero != 0)
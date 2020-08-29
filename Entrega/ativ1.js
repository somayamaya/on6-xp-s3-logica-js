/*1. Crie uma função que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32*/


const read = require('readline-sync')
let temperaturaC = parseFloat(read.question('Insira um numero : '))


function converteCemF(temperatura){
    return (temperatura*1.8 )+32
}

console.log('A sua temperatura convertida = ' + converteCemF(temperaturaC)+ ' °F')

/*Agora faça o contrário, uma função que receba uma temperatura em Fahrenheit e chame uma função que converta para Celsius.*/

const read = require('readline-sync')
let temperaturaF = parseFloat(read.question('Insira um numero : '))

function convertFemC(tempF)
{

 return ( (tempF-32)*5/9 );
} console.log('A Sua temperatura convertida = ' + convertFemC(temperaturaF)+ ' °C')
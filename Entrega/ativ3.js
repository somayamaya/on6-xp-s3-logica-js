/*3. Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.*/

const read = require('readline-sync')
let medida =parseFloat( read.question( 'Insira a medida  em metros '))

function converteMparaCm(medida){
    return medida * 1000

}console.log("Sua nova medida convertida  é: "+ converteMparaCm(medida) + ' mm')
/*5. Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5. 
*/
const read = require('readline-sync')
let num = parseInt(read.question('Insira um numero : '))
let resultado = 0

function somarAnt(num){

    for (i = 1; i<=num;i++){
        
        
        resultado = resultado + i;
        
        
        
        
    } return resultado


}let soma = somarAnt(5)
console.log(' o resultado da soma dos antecessores é = '+ soma)

/*function soma(num){
    do{
        soma += num;
        num--
        }while(num != 0);
}console.log(soma(8)*/
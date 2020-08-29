/* Crie uma função com as seguintes características:
   - A função deve receber 3 parâmetros.
   - Se somente um argumento for passado, retorne o valor do argumento.
   - Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
   - Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
   - Se nenhum argumento for passado, retorne "não recebeu parâmetro"*/

   const read = require('readline-sync')
   let valor1 = parseInt(read.question('Insira um numero : '))
   let valor2 = parseFloat(read.question('Insira um numero : '))
   let valor3 = parseFloat(read.question('Insira um numero : '))


   function operacoes(num1,num2,num3) {

      if(!num1  && !num2  && !num3){
         return "Não recebeu parâmetro";

      }else{
         if(num1){
            if(num2){
               if(num3){
                  console.log(num1 + num2)/num3;
                  return;
               }else{
                  console.log(num1 + num2)
                  return;
               }
            }else if (num3){
               console.log(num1 + num3);
               return;
            }else{
               console.log(num1);
               return;
            }
         }
         if (num2){
            if(num3){
               console.log(num2 + num3);
               return;
            
            }else if(!num1 && !num2){
               console.log(num3)
            }else{
               console.log(num2);
            }
         }  
            
         }
            
      
         


     
   
   }console.log(operacoes(valor1,valor2,valor3))
   


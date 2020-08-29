/* Crie uma função com as seguintes características:
   - A função deve receber 3 parâmetros.
   - Se somente um argumento for passado, retorne o valor do argumento.
   - Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
   - Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
   - Se nenhum argumento for passado, retorne "não recebeu parâmetro"*/

   const read = require('readline-sync')
   let primeiro = parseFloat(read.question('Insira um numero : '))
   let segundo= parseFloat(read.question('Insira um numero : '))
   let terceiro = parseFloat(read.question('Insira um numero : '))


   function operacoes(num1,num2,num3) {
      if(num1 && !num2 && !num3){
          return num1;
      }else if(!num1 && num2 && !num3){
            return num2}
      else if (!num1 && !num2 && num3)
         return num3;
      } else if(num1 && num2 && !num3){
         return num1 +num2;
      }else if (num1 && !num2 && num3){
         return num1+num3
      }else if (!num1 && num2 && num3 ){
         return num2+ num3;
      }else if(num1 && num2 && num3){
         return (num1 + num2 )/num3
      }else{
         return "Não foram passados parametros"

      }
      
   }     
     
      

	   

      console.log(operacoes(primeiro,segundo,terceiro))
	
  


 

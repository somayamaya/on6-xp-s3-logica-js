
/* Logica para a funcao que nao recebe inputs do usuario*/

function operacoes(num1, num2, num3) {
    if (num1 && !num2 && !num3) {
        return num1;
    } else if (num1 && num2 && !num3) {
        return (num1 + num2);
    } else if (num1 && num2 && num3) {
        return (num1 + num2) / num3;
    } else {
        return ("Não recebeu parâmetro");
    }
}
console.log(operacoes(num1));
console.log(operacoes(num1,num2));
console.log(operacoes(num1,num2,num3));
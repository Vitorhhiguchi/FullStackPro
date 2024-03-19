/* 
2) Desafio da Verificação de Elemento em um Array: 
Crie uma função que deve esperar receber 
2 parâmetros, primeiro deve ser um array de 
números e o segundo parâmetro é um numero que 
deseja conferir se esse numero existe dentro 
do array e com isso você deve mostrar o resultado 
se esse numero que colocou existe dentro do seu 
array de números. 
*/


function verificarArray(array, numero){
    array.filter((item) => {
        if(item === numero){
            console.log("O Número digitado está na array!");
        }else {
            console.log("O número digitado não está na array!");
        }
    });
}

verificarArray([3,4,5,6,7,8,9,10,124,4214], 5);
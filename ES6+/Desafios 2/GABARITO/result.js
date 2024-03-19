/*
Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado.
*/

function checkNumber(num) {
  if (num < 0) {
    return 'Negativo';
  } else if (num > 0) {
    return 'Positivo';
  } else {
    return 'Zero';
  }
}

console.log(checkNumber(-20))
console.log(checkNumber(40))

//--------------------------------------


/* 
Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números.
*/

function containsValue(array, value) {
  return array.includes(value);
}

// Exemplo de uso
const lista = [1, 2, 3, 4, 5];
console.log(containsValue(lista, 3)); // Saida: true
console.log(containsValue(lista, 6)); // Saida: false

//------------------------------

/* 
Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20: 
*/

const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
];

const checkProduct = products.find((product) => product.price === 20);

console.log(checkProduct);

//------------------------------
/* 
Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8 e devolver todos produtos que tem o preço menor que R$8 ? 
*/

const product = products.filter((product) => product.price < 8);

console.log(product);
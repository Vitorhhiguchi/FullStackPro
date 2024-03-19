/* 
3) Com base no array abaixo o desafio como você 
pode percorrer e encontrar o produto com Preço 
Igual a R$20 e o resultado deve mostrar apenas 
o produto que tem o preço igual a R$20:
*/

const products = [
    {name: 'Maça', price: 2.5},
    {name: 'Cola cola', price: 8},
    {name: 'Guarana', price: 5},
    {name: 'Chocolate', price: 20}
];

let resultado = products.find((product) => product.price === 20);

console.log(resultado);

const checkProduct = products.filter((produto) => produto.price < 8);

console.log(checkProduct);



const produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado'];

console.log('Listando todos Produtos: ' + produtos);

// Mostrando quantos produtos tem na lista
console.log('Quantidade Produtos: '+ produtos.length);

// Tirando produto Mouse da lista e retornando apenas os que sobraram.
console.log('Tirando produto Mouse: '+ produtos.filter(p => p !== 'Mouse'));

// Procurando algum determinado produto na lista:
const findProduto = produtos.find(p => p === 'Computador');

if(findProduto){
	console.log(`Correto!! existe ${findProduto} na sua lista!`)
}else{
	console.log('Parece que esse produto não existe');
}

// Removendo o segundo item da lista
produtos.splice(1,1)
console.log('Meus Produtos: ' + produtos)

// Ordenando os numeros
const numeros = [1,3,5,7,0,9];

console.log('Numeros Ordenados: '+ numeros.sort());

// Removendo primeiro item desta lista
console.log('Item removido: '+ numeros.shift());

// Invertendo ordem da lista
console.log('Nova ordem: ' + numeros.reverse())

// Adicionando um novo numero na lista
numeros.push(8);
console.log(numeros);

// Dia de hoje
let hoje = '17/07/2019';
const [dia, mes, ano] = hoje.split('/');

console.log('Dia: ' + dia);
console.log('Mes: ' + mes);
console.log('Ano: ' + ano);
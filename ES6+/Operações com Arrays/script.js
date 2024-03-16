
// MAP = percorrer toda uma array

let lista = ["Matheus", "jose", "Maria", "Vitor"];

lista.map((item, index,) => {
    console.log(`Passando: ${item} - Esta na posição ${index}`);
})

// Reduce = O reduce busca reduzir uma array
//Ele tem 4 casos de usos, acumulador, pra vc conseguir somar os numeros
// o segundo parametro são os numeros da array, indice do numero
// e o valor da array original

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - valor atual`);
    console.log(`${indice} - indice atual`);
    console.log(`${original} - array original`);
    console.log("===========================");

    return acumulador += numero;
});

console.log("TOTAL DO REDUCE: " + total);

// Fine


let lista = [1,3,5,7,0,9];

lista.sort((a,b) => {
 return a-b;   
});

console.log(lista);

lista.splice(0,1);
console.log(lista);

lista.reverse();
console.log(lista);
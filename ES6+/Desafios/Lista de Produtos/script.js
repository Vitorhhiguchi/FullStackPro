/* Crie uma lista de produtos

 1- A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.
 2- Mostre no console quantos produtos tem nessa lista.
 3- Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
 4- Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.
 5- Remova o segundo item da sua lista.*/


let lista = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log(lista);

let tamanhoLista = lista.length;
console.log(tamanhoLista);

let indice = lista.indexOf("Mouse");
lista.splice(indice, 1);

console.log(lista);

let busca = lista.find((item) => {
    if(item === "Teclado"){
        console.log("PRODUTO ENCONTRADO COM SUCESSO! \nNOME: "+ item);
    }else {
        console.log("O PROUDTO NÃO FOI ENCONTRADO!");
    }
})

lista.splice(1, 1);
console.log(lista);

// FIND = Ele faz uma busca na lista, porém apenas o primeiro que ele encontrar
let listagem = [5, 3, "Jose", 2, "Vitor"];

let busca = listagem.find((item) =>{
    if(item === "Jose"){
        return console.log("ITEM ENCONTRADO COM SUCESSO");
    }else{
        return console.log();
    }
});

console.log(busca);


// FILTER
//Tudo aquilo que ele encontrar na condição dada para ele
let palavras = ["Matheus", "Ana", "Jose", "Ricardo Silva", "Sujeito Programador", "Jose"];

let resultado = palavras.filter((item) => {
    return item === "Jose";
});

console.log(resultado);
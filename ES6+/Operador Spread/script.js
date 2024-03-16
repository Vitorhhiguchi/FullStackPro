
//Spread Operator
// "..." = spread operator
let primeiros = [1, 2, 3];

let numeros = [...primeiros, 4, 5, 10];

console.log(numeros);

let pessoa = {
    nome: "Vitor",
    idade: 18,
    cargo: "Dev"
};

let novaPessoa = {
    ...pessoa,
    status: "ATIVO",
    cidade: "Bandeirantes / PR",
    telefone: "35423706"
};

console.log(pessoa);
console.log(novaPessoa);

function novoUsuario(info) {
    let dados = {
        ...info,
        status:"ATIVO",
        inicio: "20/03/2023",
        codigo: "123123"
    };

    console.log(dados)
}

novoUsuario({nome: "Vitor", sobrenome: "Higuchi", cargo: "Dev"})
novoUsuario({nome: "Fer", sobrenome: "Tanaka", cargo: "Redes"})
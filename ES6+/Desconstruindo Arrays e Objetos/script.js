

// Desconstrução 

let pessoa = {
    nome: "Vitor",
    sobrenome: "Higuchi",
    empresa: "SetupJr",
    cargo: "Programador FullStak",
}

// console.log(pessoa.nome);
// console.log(pessoa.cargo);

// let nome = "TESTE";

// const {nome:nomePessoa, cargo, empresa, sobrenome} = pessoa;

// console.log(nomePessoa);
// console.log(sobrenome);

// console.log(empresa);
// console.log(cargo);

//Descontruir uma array

let nomes = ["Vitor", "Matheus", "Henrique"];

// let { 0:nanade, 2:terceiraPessoa } = nomes;
// console.log(nanade);
// console.log(terceiraPessoa);

let [primeiroNome, segundoNome, terceiroNome] = nomes;

console.log(primeiroNome);
console.log(segundoNome);
console.log(terceiroNome);


// REST operator

//Com o ... ele não sabe quantos parametros ele vai receber
// então com o ... ele espera por quantos valores forem
function convidados(...nomes){
    console.log("SEJA BEM VINDO TODO CONVIDADOS!");
    console.log(nomes);
}

convidados("Matheus", "Lucas", "Maria", "Ana Carolina");


function sorteador(...numeros){
    console.log(numeros);

    // Math.floor ele arredonda o numero  
    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log("Numero gerado foi: " + numeros[numeroGerado]);
}

sorteador(1, 4, 5, 15, 25, 23, 321, 412);
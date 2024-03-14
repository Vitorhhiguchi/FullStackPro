

// Switch

function pedir() {
    var valor = prompt("Digite um valor de 1 a 4: ");

    switch(Number(valor)){
        case 1:
            alert("Você escolheu 1 = Suco");
            break;
        case 2:
            alert("Você escolheu 2 = Água gelada");
            break;
        case 3:
            alert("Você escolheu 3 = Sorvete");
            break;
        case 4:
            alert("Você chamou o garçom!");
            break;
        default:
            alert("Escolha uma opção entre 1 a 4");   
    }
}

//CONDICIONAIS!

//Comparações com números
var valor = 20;

if(valor <= 30) {
    console.log("SIM O VALOR É IGUAL A 30!")
}else {
    console.log("NÚMERO DIFERENTE DE 30!")
}

//Comparação com strings
var nome = "Vitor";
var userOnline = false;

if(userOnline === true){
    console.log("Usuario está online!");
}else {
    console.log("Usuário está offline!")
}

// userOnline ? console.log("Usuario está online!") : console.log("Usuário está offline!")

var numero = 10;

numero === 10 ? console.log("NUMERO É IGUAL a 10!") : console.log("NÚMERO NÃO TEM O VALOR 10!")
// ? = if e : = else
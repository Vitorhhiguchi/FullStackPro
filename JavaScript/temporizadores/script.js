

// setInterval
/* Ele funciona como se fosse um loop de função,
fica chamando a função varias, e varias vezes*/

function acao(){
    document.write("Executando... <br>");
}

// Funciona em milisegundo
// setInterval(acao, 1000);

// Funcão anonima, voce declara a função dentro do setInterval

// setInterval(() => {
//     document.write("Executando!!! <br>");
// }, 1000)

//Como parar o set interval ?
//Basta atrelarmos o setInterval em uma variavel

var timer = setInterval(() => {
    document.write("Executando!!! <br>");
}, 1000)


// Parar o set, para o timer para sempre
clearInterval(timer); 


// setTimeout

// Ele executa apenas uma vez após o tempo determinado
setTimeout(acao, 3000);

// Função anonima

setTimeout(() => {
    console.log("EXECUTOU NOSSO TIMEOUT")
}, 3000);
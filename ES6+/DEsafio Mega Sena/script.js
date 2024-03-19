

function megaSena(numero){
    if(numero < 6 || numero > 9) {
        console.log("NÃO É POSSIVEL USAR ESSE NUMERO");
        return [];
    }else {
        let array = [];
        for(let i = 0; i < numero; i++){
            const numeroAleatorio = Math.floor((Math.random() * 60) + 1);
            
            if(!array.includes(numeroAleatorio)){
                array.push(numeroAleatorio)
            }
        }
        console.log(array);
    }
}

megaSena(7)
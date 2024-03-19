
// includes, startsWith, endsWith

let nomes = ["Matheus", "Lucas", "Jose"];

console.log(nomes.includes("Maria"));

if(nomes.includes("Matheus")){
    console.log("ESTA NA LISTA");
}else{
    console.log("NAO ESTA NA LISTA");
}

//StartsWith

let nome = "Matheus";

console.log(nome.startsWith("Mat"));

console.log(nome.endsWith("eus"));
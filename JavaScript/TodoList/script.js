

let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

//Transformando de volta os dados do localStorage em Lista(vetor)
let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function renderTask() {
    listElement.innerHTML = "";

    //percorrer um elemento
    tarefas.map((todo) =>{
        let liElement = document.createElement("li");
        let taskText = document.createTextNode(todo);
        
        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#")

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        let position = tarefas.indexOf(todo);

        linkElement.setAttribute("onclick", `deletTask(${position})`);

        liElement.appendChild(taskText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}

renderTask();

function addToList() {
    if(inputElement.value === ''){
        alert("Não foi digitado nada! \nDigite uma tarefa")
        return false;
    }else {
        let newTask = inputElement.value;

        tarefas.push(newTask);
        inputElement.value = '';
    
        renderTask();
        saveDatas();
    }
}

buttonElement.onclick = addToList;

function deletTask(position){
    tarefas.splice(position, 1);
    renderTask();
    saveDatas();
}

// Função para salvar o dados. Dentro da função ele armazena no localStorage, mas antes disso tem que transformar a lista em String
function saveDatas(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}
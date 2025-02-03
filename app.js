// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// Función para agregar los nombres de los amigos a la lista. 
function agregarAmigo(){
    const inputNombre = document.getElementById("amigo");
    const nombre = inputNombre.value.trim();
    if (nombre === ""){
        alert("Por favor, ingrese un nombre valido.")
        return; 
    }
    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    actualizarLista();
    
}
// Función para actualizar los nombres de los amigos 
function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";
// Se crea un buble for para recorrer el arreglo.
    for (let i =0; i < amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li)

    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("No hay amigos disponibles.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random()* amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${nombreSorteado}`;


}

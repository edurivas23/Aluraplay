import { conexionAPI } from "./conexionAPI.js";
import createCard from "./mostrarVideos.js";
const botonBuscar = document.querySelector("[data-boton-buscar]")
const barraBusqueda = document.querySelector("[data-buscar]");

async function filtarVideo(evento) {
    evento.preventDefault();
    const datosDeBusqueda = document.querySelector("[data-buscar]").value;
    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda); 
    const lista = document.querySelector("[data-lista]")

    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    busqueda.forEach(video => lista.appendChild(createCard(video.titulo, video.descripcion, video.url, video.imagem)));

    if(busqueda.length == 0){
        lista.innerHTML= `<h2 class="mensaje__titulo">No se encontro nada relacionado con ${datosDeBusqueda} </h2>`
    }
}

botonBuscar.addEventListener('click',evento => filtarVideo(evento))
barraBusqueda.addEventListener('keydown',evento =>{
    if(evento.key === 'Enter'){
        filtarVideo(evento)
    }
});
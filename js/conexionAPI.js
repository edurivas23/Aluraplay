

async function listarVideos() {
    
    const conexion = await fetch('http://localhost:3001/videos');
    const conexionConvertida = conexion.json();
    

    return conexionConvertida
}

async function enviarVideo(titulo,descripcion,url,imagem) {
    const conexion = await fetch('http://localhost:3001/videos',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({
            titulo:titulo,
            descripcion:`${descripcion} mil visualizaciones`,
            url:url,
            imagem:imagem
        })
    });
    const conexionConvertida = conexion.json()

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video");
    }

    return conexionConvertida;
}
async function buscarVideos(clave) {
    const conexion = await fetch(`http://localhost:3001/videos?q=${clave}`);
    const conexionConvertida = conexion.json();
    return conexionConvertida
}

export const conexionAPI = {
    listarVideos, 
    enviarVideo,
     buscarVideos
}

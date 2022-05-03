const url = "https://dog.ceo/api/breeds/image/random"
const imagen = document.getElementById("lomito");
const imagen2 = document.getElementById("lomito2");

fetch(url).then(respuesta => respuesta.json()).then(datos =>{
    console.log(datos.message);
    imagen.src = datos.message;
})

async function obtenerPerrito(){
    const infoPerritos = await fetch(url);
    const perrito = await infoPerritos.json();
    console.log(perrito);
    imagen2.src = perrito.message
}

obtenerPerrito()
const url = "https://api.thecatapi.com/v1/images/search"
const imagen = document.getElementById("kitty");

async function changeKitty() {
    const infogatitos = await fetch (url);
    const gatito = await infogatitos.json();
    console.log(gatito);
    imagen.src = gatito[0].url
}

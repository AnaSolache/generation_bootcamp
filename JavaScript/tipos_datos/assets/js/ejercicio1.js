/* const anioNacimiento = parseInt(prompt("Introduce tu año de nacimiento"));
const anioActual = 2022;
console.log(anioActual-anioNacimiento);

console.log(`Tienes $(anioActual-anioNacimiento) años`);
 
-----------------nivel 2-------------------

const anioNacimiento = parseInt(document.querySelector(#anio).value);
console.log(anioNacimiento.value);

const anioActual = 2022;

function calcularEdad(){
    console.log(`Tienes $(anioActual-anioNacimiento) años`);
}

-----------------nivel 3------------------*/

const anioActual = 2022
const mesActual = 4
const diaActual = 27


function mostrarDatos(){

    const nacimiento = document.getElementById("anio").value;
    console.log(nacimiento);
    const nacimientoDivido = nacimiento.split("-");
    console.log(nacimientoDivido)

    const anio = parseInt(nacimientoDivido [0])
    const mes = parseInt(nacimientoDivido [1])
    const dia = parseInt(nacimientoDivido [2])
    console.log(anio,mes,dia);

    if(mesActual>= mes && dia <= diaActual){
        console.log(`Tienes $(anioActual - anioNacimiento) años`);

    }
    else{
        console.log(`Tienes $(anioActual - anioNacimiento -1) años`);
    }
}
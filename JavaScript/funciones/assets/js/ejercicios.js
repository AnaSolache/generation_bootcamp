/*function invertirPalabra(palabra){
    return palabra.split("").reverse().join("");
}

console.log(invertirPalabra('Hola mundo'))

const invertir = (palabra = "") => {

if(palabra.length <= 1) return console.warn('No ingresaste texto');

if(typeof(palabra) !== 'string') return console.error('El valor ingresado no es una palabra');

    let arreglo = palabra.split("");
    let reverso = arreglo();
    let unir = reverso.join("");

    return console.log(unir);
}

invertir("tengo sueño"); */


// ***********Ejercicio 1 ********************
function palindromo(palabra){
   let check = palabra.split("").reverse().join("");
   if(check === palabra ){return true} else {
       return false;
   }}
 
   console.log(palindromo("cualquier"))

   

// ***********Ejercicio 2 ********************

function repetir(otraCadena, numeroDeVeces){
    let cadenaRepetida = otraCadena.repeat(numeroDeVeces);
}




// ***********Ejercicio 3 ********************
let cadena = "Hola mundo"

function cortarcadera(cadena, numero){
    let extraida = cadena.substring(0, numero);
} 
    console.log(extraida);

cortarcadeta(cadena, 7);

// ***********Ejercicio 4 ********************

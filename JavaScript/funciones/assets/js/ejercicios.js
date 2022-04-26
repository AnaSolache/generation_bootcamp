/*function invertirPalabra(palabra){
    return palabra.split("").reverse().join("");
}

console.log(invertirPalabra('Hola mundo'))*/

const invertir = (palabra = "") => {

if(palabra.length <= 1) return console.warn('No ingresaste texto');

if(typeof(palabra) !== 'string') return console.error('El valor ingresado no es una palabra');

    let arreglo = palabra.split("");
    let reverso = arreglo();
    let unir = reverso.join("");

    return console.log(unir);
}

invertir("tengo sueño");
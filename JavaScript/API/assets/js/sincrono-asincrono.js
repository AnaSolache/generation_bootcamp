/* let tiempo = 5000
let datos

setTimeout(() => {
    console.log("Ejecutando despues de 3 segundos");
}, tiempo);

console.log(datos);

console.log("Hola");
 */

const datos =[
    {
        nombre: "Ana",
        edad: 23,
    },
    {
        nombre: "Jonathan",
        edad: 32,
    },
    {
        nombre: "Saul",
        edad: 18,
    }
]


function obtenerDatos(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(datos);
        },3000)
    });
}
/* obtenerDatos().then((datos));
console.log(datos); */


async function obtenerDatosAsync(){
    const datosObtenidos = await obtenerDatos();
    console.log(datosObtenidos);
}

obtenerDatosAsync();
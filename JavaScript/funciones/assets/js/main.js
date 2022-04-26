function saludar(){

    console.log("Hola");

}

saludar();

//Las funciones estan compuestas por la palabra reservada 'function'.
// EL nombre de la funcion, el paso de parametros que estan en los 
// parentesis. Finalmente, tenemos el cuerpo de la funcion, que son las instrucciones
// que realizara la funcion.

/*

En el caso de la funcion de arriba tenemos:

1) La palabra reservada: function
2) nombre: saludar
3) Paso de parametros, en este caso vacio: ()
4) Cuerpo de la funcion: { }
5) Acciones a ejecutar: console.log("Hola");
6) Mandar a llamar la funcion: saludar(); 

*/

//Finalmente, ¿que es una funcion? 
// Es un pedazo de codigo inactivo que se puede mandar a llamar
// las veces que se requieran. Tambien tiene la caracteristica de ser
// reutilizable para otros files de JS. 

/*
La funcion, para ejecutarse, necesita ser llamada SIEMPRE.
*/

//------------------ PASO DE PARAMETROS;
let nombre = "Sol";

function saludar1(name_p){

    console.log(`Hola, mi nombre es ${name_p}`);
}

saludar1(nombre);

/*
Las funciones con paso de parametros funcionan como maquinitas, 
que necesitan un ingreso de datos, para poder ejecutar todas
las acciones mencionadas.

El ejemplo colocado, es la misma funcion que necesita un ingreso 
de datos para poder funcionar. 
*/

function saludar(nombre = "Panchito", apellido = ""){
    //string normal
    //console.log('Hola mi nombre es:', nombre, apellido);
    //template Strings ||Plantillas literales
    //console.log/('Hola mi nombre es :$nombre?"Sol":"Desconocido}')
    return `Mi nombre es ${nombre} ${apellido}`;
}

saludar ("Pedro", "Perez");//la invocacion o llamada de la funcion

let funcionSaludar = saludar('Felipe', 'Maqueda');
console.log(funcionSaludar);

console.log(saludar('Alberto', 'Hernandez'));





function suma(a,b){
    return a + b;
}
console.log(suma(30,10));


//funciones expresadas | funcion expresion

/*callbacks*/

const resta = function(a,b){
    return a - b;
}
console.log(resta(30,10));


/****************** funcion flecha | anonima *************/
const multiplicacion = (a,b) => a * b;

console.log(multiplicacion(40,2));


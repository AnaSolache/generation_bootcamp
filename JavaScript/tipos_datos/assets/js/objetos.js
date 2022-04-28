const nombre = "Ana";
const nombre2 = new String("Solache");

console.log(nombre);
console.log(nombre2);

const persona = new Object;
persona.nombre = "Ana"
persona.apellido = "Vazquez"
persona.edad = 23

console.log(persona);

const nuevaPersona = {
    nombre: "Laura",
    apellido: "Solache",
    edad: 23,
    pasatiempos: ["nadar","dibujar","anime"],
    colorFavorito: "azul",
    trabajo: {
        arquitectura: "dibujante",
        frontend: "programacion"
    },
    saludar: function(){
        console.log("Hola")
    }
};

console.log(nuevaPersona);

"Hola".length //atributo o propiedad
"Hola".toLowerCase() //metodo

console.log(nuevaPersona.edad);
console.log(nuevaPersona.trabajo.nombre);
console.log(nuevaPersona.pasatiempos);

nuevaPersona.saludar()

//***********Para cambiar el valor ************** 

nuevaPersona.edad = 10;
console.log(nuevaPersona);

//*********** Agregar un nuevo atributo ************** 

nuevaPersona.color = "morado";
console.log(nuevaPersona);


//*********** metodos ************** 
console.log(nuevaPersona.hasOwnProperty("edad")); 
//si hay un atributo dentro del objeto


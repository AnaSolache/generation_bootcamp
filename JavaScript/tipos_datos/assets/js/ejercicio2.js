
const daniel = {
    nombreCompleto: {
        nombre: "Daniel",
        apellido: "Perez",
    },
    edad: 24,
    pasatiempos: ["fotografia", "peliculas", "leer"],
}

const santiago = {
    nombreCompleto: {
        nombre:"carlos",
        apellido:"cruz",
    },
    edad: 29,
    pasatiempos: ["futbol", "estudiar", "anime"],    
    }

const gabriel = {
        nombreCompleto: {
            nombre: "ganriel",
            apellido: "gonzalez"
        },
        edad: 20,
        pasatiempos: ["jugar","salir","correr"],
    }
    

    const luis = {
        nombreCompleto: {
          nombre: "Luis",
          apellido: "Jimenez",
        },
        edad: 30,
        pasatiempos: ["leer", "guitarra", "ajedrez"],
    }

    const sesai = {
        nombreCompleto :{
            nombre: "Sesai",
            apellido: "Cazares",
            },
            edad: 25,
            pasatiempos: ["fotografia","caminar","dibujar"],
        }
    
const cohorte12 = [daniel,santiago,gabriel,luis,sesai]

for(let i=0; i<cohorte12.length;i++){
    if(cohorte12[i].pasatiempos.includes("leer")){
        console.log(cohorte12[i].nombreCompleto.nombre)
        }
}
class Pokemon{
    //atributos
    #nombre = '';
    #edad = 0;
    #evolucion = '';
    //#tipo = '';

    constructor(nombre, edad, evolucion,tipo){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#evolucion = evolucion;
        //this.#tipo = tipo;
    }

    get (nombre){
        return this.#nombre
    }

    atacar(){
        return console.log(`${this.#nombre},esta atacando`);
    }

    evolucionar(){
        let mensaje = ''
        
        if(this.#evolucion === ''){
            mensaje = 'No puedo evolucionar';
            console.log(mensaje) 
        }else{
            mensaje = `${this.#nombre} ha evolucionado a ${this.#evolucion}`;
            this.#nombre = this.#evolucion;
            console.log(mensaje);
        }
    }


}

/* const charmander = new Pokemon('Charmander', 2, 'Charmaleon', 'fuego');
const bulbasaur = new Pokemon('Bulbasaur', 1, 'Ivisaur', 'Planta');

console.log(charmander);
console.log(bulbasaur);

charmander.evolucionar(); */

//clase hija
class tipoFuego extends Pokemon{
    #tipo ='';
    constructor(nombre, edad, evolucion){
        super(nombre, edad, evolucion);
        this.#tipo = 'Fuego';
    }

    atacar(){
        return console.log(`${this.nombre}, esta atacando`);
    }

}

const charmander = new tipoFuego('Charmander', 2, 'Charmeleon');
console.log(charmander);

charmander.atacar();
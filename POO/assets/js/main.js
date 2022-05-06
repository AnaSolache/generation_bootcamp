class Persona{ 
//atributos
    #id = 0;
    static #contador = 0;
    #nombre = '';
    #edad = 0;
    #correo ='';

        constructor(nombre,edad,correo){
            this.#nombre = nombre;
            this.#edad = edad;
            this.#correo = correo;
            this.#id = ++Persona.#contador;
        }

        //Setter & getters
        //set & get
        //fijar y obtener
        //se usan y se llaman como si fueran atributos

        get nombre(){
            return this.#nombre;
        }
        set nombre(nombre){
            this.#nombre = nombre;
        } 

        get edad(){
            return this.#edad;
        }
        set edad(edad){
            this.#edad = edad; 
        } 

        get correo(){
            return this.#correo;
        }
        set correo(correo){
            this.#correo = correo;
        }

        //metodos
        cambiarNombre(nombre){
            this.#nombre = nombre;
        }

        #saludar(){
            let mesaje = `Hola mi nombre es ${this.#nombre}`;
            return mesaje;
        }

        mostrarsaludo(){
            return this.#saludar()
        }

        static mostrarContador(){
            return Persona.#contador
        }


}

//instrancia de la clase persona

const persona1 = new Persona('Pedro', 35, 'pedro@gmail.com');
const persona2 = new Persona('Gabriel',23, 'gabo@gmail.com');
const persona3 = new Persona('Martin',40, 'martin@gmail.com');

persona1.nombre='Jose'

console.log(persona1);
console.log(persona2);

console.log(persona1.mostrarsaludo());
console.log(persona2.mostrarsaludo());

console.log(Persona.mostrarContador());


window.addEventListener('load',function(){
    this.alert('Se ha terminado de cargar la página');
})


function saludar(){
    alert('Hola');
}
//También es considerado mala práctica

/* Manejador de eventos Semántico */
const $botonSemantico = document.getElementById('evento-semantico');

$botonSemantico.onclick = saludar;

$botonSemantico.onclick = function(evento){
  //alert('Hola desde un manejador semántico') 
  console.log(evento.target);
}


/* Manejador de eventos múltiples */

const $botonMultiple = document.getElementById('eventoMultiple');

$botonMultiple.addEventListener('click', function(){
    alert('hola desde un manejador multiple');
})

$botonMultiple.addEventListener('click',function(e){
    console.log(e.target);
})
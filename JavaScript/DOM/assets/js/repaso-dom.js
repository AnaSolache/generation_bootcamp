const $padre = document.querySelector('.padre');

const $parr = document.createElement('p');
$parr.textContent = 'Lorem ipsum';

$padre.appendChild($parr);

//Agregar elementos con HTML

/* const $cuadro = document.querySelector('.cuadro');
$cuadro.innerHTML = '';//inicializar el contenido del elemento 

$cuadro.innerHTML = "
                    <a href="#">Este es un enlace</a>
                    <ol>
                        <li>Elemento 1</li>
                        <li>Elemento 2</li>
                        <li>Elemento 3</li>
                    </ol>
                    " */


const estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'];
const $lista = document.createElement ('ul');

estaciones.forEach( estacion => {
    const $li = document.createElement('li');
    $li.textContent = estacion;
    $lista.appendChild($li);
});

document.appendChild($lista)


const continentes = ['Africa', 'America', 'Asia', 'Europa', 'Oceania'];

const $ol = document.createElement('ol');
$cuadro.appendChild($ol);

continentes.forEach(continente => {
    $ol.innterHTML =´<li></li>´
});
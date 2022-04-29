const $titulo = document.querySelector('h1');
const $parr = document.querySelector('p');
const $card = document.querySelector('.card')

//*****************te devuelve el nombre del nodo
console.log($titulo.nodeName);
console.log($parr.nodeName);

//******************textContent
//$parr.textContent = '¡Hola mundo!';
console.log($parr.textContent);

//innerText no usar

//******************innerHtml reemplaza lo que hay adentro del elemento selecionado
console.log($parr.innerHTML);

//$parr.innerHTML = '<a href="#">Este enlace</a>' ;


//**************outerHTML reemplaza todo el elemento seleccionados
//$parr.outerHTML = '<a href="#">Este es un enlace</a>' ;


//****************crear elementos de html
console.log(document);

function crearElemento(){
    const img = document.createElement('img');
    img.src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU"
    //appenChild

    $card.appendChild(img);

} 

crearElemento()
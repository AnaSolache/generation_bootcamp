/* Algunas cosas que podemos hacer con DOM */
console.log(window);

console.log(document);

console.log(document.head);//regresa el head del documento

console.log(document.body);//regresa el body

console.log(document.documentElement);//regresa todo el html

console.log(document.doctype);//etiqueta de doctype, la covierte a texto

console.log(document.charset); //regresa UTM-8 
/* 
console.log(links); 

console.log(images);*/

console.log(document.styleSheets); //regresa los css

console.log(document.scripts); //regresa las etiquetas script



//retrasar la ejecución de algún comando
setTimeout(()=>{
    console.log(document.getSelection().toString());
}, 3000);


//es una mala práctica no debería utilizarse
document.write('Hola munda desde document write')
document.body.setAttribute('id', 'inicio');
console.log(document.body.getAttribute('id'));


document.getElementById('nombre').setAttribute('value', 'Samuel'); //o en vez de .setAttribute('value', 'Samuel'); simplemente .vale = 'Samuel';

/*1. lo creamos*/ 
const parrafo = document.createElement('p');

/*2. lo vestimos  */
parrafo.innerText = 'Me encantan las clases de lenguaje de marcas';
parrafo.setAttribute('id', 'miParrafo');

/*3. lo anexamos */
console.log(parrafo)
document.body.appendChild(parrafo);

const frutas = ['mango','manzanas', 'pera', 'fresas', 'patilla'];

frutas.forEach(fruta =>{
    const item = document.createElement('li');
    item.innerText = fruta;
    document.getElementById('frutas').appendChild(item);
})
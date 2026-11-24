/* const numeros = [1, 2, 3, 4, 5];
let otrosnumeros = new Array (5, 7, 8);
console.log(numeros[2]);

let colores = ['Rojo', 'Verde', 'Azul'];
console.log("El array colores tiene " + colores.length + " elementos");
colores.push('Amarillo');
console.log(colores.length);
console.log("El array colores tiene " + colores.length + " elementos");
colores.pop();
console.log("El array colores tiene " + colores.length + " elementos");
const cuerpo = document.body;
//cuerpo.innerHTML = '<p>El color es: ' + colores[2] + '</p>';
//cuerpo.innerHTML += "<p>El color es: " + colores[1] + "</p>";
//cuerpo.innerHTML += `<p>El color es:  ${colores[0]}</p>`;
//cuerpo.style.backgroundColor = 'yellow';

let arcoiris = [];
arcoiris.push('red', 'orange', 'yellow', 'lime', 'cyan', 'blue', 'violet');

cuerpo.innerHTML = `<ul>`;
arcoiris.forEach(color => {
    cuerpo.innerHTML += `<li style="background-color: ${color}">${color}</li>`;
});
cuerpo.innerHTML += `</ul>`;

//for (let i = 0; i < arcoiris.length; i++) {
//cuerpo.innerHTML += `<p style="background-color: ${arcoiris[i]}">El color es: ${arcoiris[i]} </p>`;}


*/
const salida = document.getElementById('salida')
const boton = document.getElementById('boton')
const entrada = document.getElementById('entrada')
function agregarContenido(frase) {
    salida.innerHTML += `<li>${entrada.value}</li>`;
}
//agregarContenido('me gusta JavaScript');
//agregarContenido('me gustan las papas con huevo');

boton.addEventListener('click', function(){
   // agregarContenido('una frase cualquiera');
});




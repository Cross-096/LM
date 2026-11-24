const boton = document.getElementById('boton-crear')
const titulo = document.getElementById('titulo')
const genero = document.getElementById('genero')
const listaPeliculas = document.getElementById('peliculas')
function crearPelicula() {
const fila = document.createElement('tr');
const celda1 = document.createElement('td');
const celda2 = document.createElement('td');
celda1.innerText = titulo.value;
celda2.innerText = genero.value;

fila.append(celda1, celda2);
listaPeliculas.appendChild(fila)
titulo.value = '';
}
boton.addEventListener('click', crearPelicula);

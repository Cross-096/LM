console.log(document.title)
/*alert(document.body.innerText.length)*/
console.log(document.getElementsByTagName('li')[1].innerText)
const items = document.getElementsByTagName('li');


for(let item of items) { /*bucleeeeeeeeeeeeeee*/
    console.log(item.innerText)
}
const etiquetas = document.getElementsByClassName('etiqueta');
for(let etiqueta of etiquetas) {
    console.log(etiqueta.innerText)
}
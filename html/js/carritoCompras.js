/*function agregarCantidad(image) {
    let cantidadElemento = image.nextElementSibling;
    let cantidadActual = parseInt(cantidadElemento.innerText);
    cantidadActual++;
    cantidadElemento.innerText = cantidadActual;
}
*/



function actualizarCantidad(cantidadId, incremento) {
    let cantidadElemento = document.getElementById(cantidadId);
    let cantidadActual = parseInt(cantidadElemento.innerText);
    cantidadActual += incremento;
    cantidadElemento.innerText = cantidadActual;
}
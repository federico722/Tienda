function agregarCantidad(image) {
    let cantidadElemento = image.nextElementSibling;
    let cantidadActual = parseInt(cantidadElemento.innerText);
    cantidadActual++;
    cantidadElemento.innerText = cantidadActual;
}
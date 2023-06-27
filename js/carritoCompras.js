function agregarCantidad(image) {
    let cantidadElemento = document.getElementById("cantidad");

    let cantidadActual = parseInt(cantidadElemento.innerText);

    cantidadActual++;

    cantidadElemento.innerText = cantidadActual;
}
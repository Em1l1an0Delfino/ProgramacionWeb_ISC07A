document.addEventListener("DOMContentLoaded", function() {
    // Variables globales
    let contador = 0;
    const spanId = document.getElementById("spanid");
    const increaseBtn = document.getElementById("increaseBtn");
    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("resetBtn");

    // Función para aumentar el contador en 1
    function aumentarContador() {
        contador++;
        spanId.textContent = contador;
    }

    // Función para disminuir el contador en 1
    function disminuirContador() {
        if (contador > 0) {
            contador--;
            spanId.textContent = contador;
        }
    }

    // Función para resetear el contador a 0
    function resetearContador() {
        contador = 0;
        spanId.textContent = contador;
    }

    // Mensaje en la consola al cargar la página
    console.log("¡Hola Mundo!");

    // Agregar event listeners a los botones
    increaseBtn.addEventListener("click", aumentarContador);
    decreaseBtn.addEventListener("click", disminuirContador);
    resetBtn.addEventListener("click", resetearContador);
});

let valor = 0;  // Inicializamos el valor del contador

// Función para sumar
function sumar() {
    valor++;  
    document.getElementById("valor").innerText = `${valor}`;  
}

// Función para restar
function restar() {
    valor--;  
    document.getElementById("valor").innerText = `${valor}`;  
}

// Función para resetear
function reset() {
    valor = 0;  
    document.getElementById("valor").innerText = `${valor}`;  
}

// Detectar presión de teclas
document.addEventListener("keydown", function(event) {
    if (event.key === "+") {
        sumar();
    } else if (event.key === "-") {
        restar();
    } else if (event.key === "Delete") {  // 'Supr'
        reset();
    }
});

// Función para agregar valores al display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Función para limpiar el display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Función para eliminar el último carácter
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Función para calcular el resultado
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evalúa la expresión matemática
    } catch (error) {
        display.value = 'Error';
    }
}
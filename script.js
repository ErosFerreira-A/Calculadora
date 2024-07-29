document.addEventListener('DOMContentLoaded', (event) => {
    const display = document.getElementById("display");

    function acrescentaNumero(input) {
        display.value += input;
    }

    function limparDisplay() {
        display.value = '';
    }

    function calcular() {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Erro';
        }
    }

    window.acrescentaNumero = acrescentaNumero;
    window.limparDisplay = limparDisplay;
    window.calcular = calcular;
});
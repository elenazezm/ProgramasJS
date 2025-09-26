const form = document.getElementById("formHoras");
const resultado = document.getElementById("Resultado");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const horasTrabajadas = parseInt(document.getElementById("horas").value);
    const pagoHora = parseFloat(document.getElementById("pagoHora").value);

    if (isNaN(horasTrabajadas) || horasTrabajadas < 0) {
        resultado.textContent = "Por favor ingrese un número válido de horas.";
        return;
    }

    if (isNaN(pagoHora) || pagoHora <= 0) {
        resultado.textContent = "Por favor ingrese un pago por hora válido.";
        return;
    }


    if (horasTrabajadas <= 40) {
        pagoTotal = horasTrabajadas * pagoHora;
    } else {
        const horasNormales = 40;
        const horasExtras = horasTrabajadas - 40;

        pagoTotal = horasNormales * pagoHora;

        if (horasExtras <= 8) {
            pagoTotal += horasExtras * (pagoHora * 2);
        } else {
            pagoTotal += 8 * (pagoHora * 2);
            pagoTotal += (horasExtras - 8) * (pagoHora * 3);
        }
    }

    resultado.textContent = `El pago total es: $${pagoTotal.toFixed(2)}`;
});
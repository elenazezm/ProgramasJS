const form = document.getElementById("formUtilidad");
const resultado = document.getElementById("Resultado");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const salario = parseFloat(document.getElementById("salario").value);
    const antiguedad = parseFloat(document.getElementById("antiguedad").value);

    if (isNaN(salario) || salario <= 0) {
        resultado.textContent = "Por favor ingrese un salario válido.";
        return;
    }

    if (isNaN(antiguedad) || antiguedad < 0) {
        resultado.textContent = "Por favor ingrese una antigüedad válida.";
        return;
    }

    if (antiguedad < 1) {
        porcentaje = 0.05;
    } else if (antiguedad < 2) {
        porcentaje = 0.07;
    } else if (antiguedad < 5) {
        porcentaje = 0.10;
    } else if (antiguedad < 10) {
        porcentaje = 0.15;
    } else {
        porcentaje = 0.20;
    }

    const utilidad = salario * porcentaje;

    resultado.textContent = `La utilidad correspondiente es: $${utilidad.toFixed(2)} (${(porcentaje*100).toFixed(0)}% del salario).`;
});
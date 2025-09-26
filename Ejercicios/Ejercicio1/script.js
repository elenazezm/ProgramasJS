document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formInversion");
    const resultado = document.getElementById("resultado");
    const tasa = 0.02;

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const capital = parseFloat(document.getElementById("capital").value);

        if (isNaN(capital) || capital <= 0) {
            resultado.textContent = "Por favor ingrese un capital válido.";
            return;
        }

        const ganancia = capital * tasa;
        const total = capital + ganancia;

        resultado.textContent = `Su ganancia en un mes será de $${ganancia.toFixed(2)} y su balance total será de $${total.toFixed(2)}.`;
    });
});

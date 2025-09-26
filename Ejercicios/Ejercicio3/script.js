const form = document.getElementById("formDescuento");
const resultado = document.getElementById("Resultado");

const tasadescuento = 0.15;

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const compra = parseFloat(document.getElementById("compra").value);

    if (isNaN(compra) || compra <= 0) {
        resultado.textContent = "Por favor ingrese un total de compra válido.";
        return;
    }

    const montodescuento = compra * tasadescuento;
    const total = compra - montodescuento;

    resultado.textContent = `Su descuento aplicado será $${montodescuento.toFixed(2)} y su total a pagar será $${total.toFixed(2)}.`;
});
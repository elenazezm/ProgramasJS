const form = document.getElementById("formSalario"); 
const resultado = document.getElementById("Resultado");
const comision = 0.1;

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const salario = parseFloat(document.getElementById("salario").value);
    const ventas = parseFloat(document.getElementById("ventas").value);

    if (isNaN(salario) || salario <= 0) {
        resultado.textContent = "Por favor ingrese un salario válido.";
        return;
    }

    if (isNaN(ventas) || ventas < 0) {
        resultado.textContent = "Por favor ingrese un número válido de ventas.";
        return;
    }

    const ganancia = ventas * comision; 
    const total = salario + ganancia;

    resultado.textContent = `Su bono por comisiones será de $${ganancia.toFixed(2)} y su salario total será de $${total.toFixed(2)}.`;
});
const form = document.getElementById("formCalificacion");
const resultado = document.getElementById("Resultado");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const calificacion = parseFloat(document.getElementById("parciales").value);
    const examenf = parseFloat(document.getElementById("examenf").value);
    const trabajof = parseFloat(document.getElementById("trabajo").value);

    if (isNaN(calificacion) || calificacion <= 0) {
        resultado.textContent = "Por favor ingrese una calificacion válida.";
        return;
    }

    if (isNaN(examenf) || examenf <= 0) {
        resultado.textContent = "Por favor ingrese una calificacion válida.";
        return;
    }

    if (isNaN(trabajof) || trabajof <= 0) {
        resultado.textContent = "Por favor ingrese una calificacion válida.";
        return;
    }

    const tcalificacion = (calificacion*55)/30;
    const texamen = (examenf*30)/10;
    const ttrabajo = (trabajof*15)/10;

    const calfinal = tcalificacion + texamen + ttrabajo;

    resultado.textContent = `Su calificacion final será de ${calfinal.toFixed(1)}`;
});
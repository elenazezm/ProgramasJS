const form = document.getElementById("formEdad");
const resultado = document.getElementById("Resultado");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fechaNac = document.getElementById("fechaNacimiento").value;

    if (!fechaNac) {
        resultado.textContent = "Por favor seleccione una fecha de nacimiento.";
        return;
    }

    const fechaNacimiento = new Date(fechaNac);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (edad < 0) {
        resultado.textContent = "La fecha de nacimiento no puede ser en el futuro.";
        return;
    }

    resultado.textContent = `Su edad es: ${edad} años.`;
});
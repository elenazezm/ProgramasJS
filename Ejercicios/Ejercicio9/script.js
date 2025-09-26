const form = document.getElementById("formRegistro");
const resultado = document.getElementById("Resultado");

function validarNombre() {
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") {
        alert("El nombre es obligatorio.");
        return false;
    }
    return true;
}

function validarEmail() {
    const email = document.getElementById("email").value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        alert("El email es obligatorio.");
        return false;
    }
    if (!regex.test(email)) {
        alert("El email no es válido.");
        return false;
    }
    return true;
}

function validarPassword() {
    const password = document.getElementById("password").value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!regex.test(password)) {
        alert("El password debe tener mínimo 6 caracteres, incluyendo una minúscula, una mayúscula y un número.");
        return false;
    }
    return true;
}

function validarComentarios() {
    const comentarios = document.getElementById("comentarios").value;
    if (comentarios.trim() === "") {
        alert("Los comentarios son obligatorios.");
        return false;
    }
    if (comentarios.length > 50) {
        alert("Los comentarios no deben exceder los 50 caracteres.");
        return false;
    }
    return true;
}

function validarCondiciones() {
    const condiciones = document.getElementById("condiciones").checked;
    if (!condiciones) {
        alert("Debe aceptar las condiciones del servicio.");
        return false;
    }
    return true;
}

document.getElementById("nombre").addEventListener("blur", validarNombre);
document.getElementById("email").addEventListener("blur", validarEmail);
document.getElementById("password").addEventListener("blur", validarPassword);
document.getElementById("comentarios").addEventListener("blur", validarComentarios);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const valido = validarNombre() && validarEmail() && validarPassword() && validarComentarios() && validarCondiciones();

    if (valido) {
        resultado.textContent = "Registro completado con éxito.";
    } else {
        resultado.textContent = "El formulario contiene errores.";
    }
});
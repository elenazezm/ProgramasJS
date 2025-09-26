const form = document.getElementById("formPalabras");
const resultado = document.getElementById("Resultado");

function palabrasANumeros(arr) {
    const mapa = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    return arr.map(palabra => {
        palabra = palabra.trim().toLowerCase();
        return mapa.hasOwnProperty(palabra) ? mapa[palabra] : -1;
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const entrada = document.getElementById("entrada").value;

    if (!entrada) {
        resultado.textContent = "Por favor ingrese al menos una palabra.";
        return;
    }

    const arregloPalabras = entrada.split(",");
    const traducido = palabrasANumeros(arregloPalabras);

    resultado.textContent = `Traducción: [ ${traducido.join(", ")} ]`;
});
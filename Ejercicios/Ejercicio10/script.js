const form = document.getElementById("formHTML");
const resultado = document.getElementById("Resultado");

const Scripts = /<script\b[^>]*>[\s\S]*?<\/script>/gi;

form.addEventListener("submit", function(event){
  event.preventDefault();

  const codigo = document.getElementById("text").value;

  const limpio = codigo.replace(Scripts, "");

  resultado.textContent = limpio;
})


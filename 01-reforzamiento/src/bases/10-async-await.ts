function askForData () {
  return new Promise((resolve) => {
    setTimeout(() => resolve("¡Datos listos!"), 2000);
  });
}

async function showResult() {
  console.log("Buscando datos...");
  const resultado = await askForData(); // Espera 2 segundos
  console.log(resultado); // Muestra "¡Datos listos!"
}

showResult();

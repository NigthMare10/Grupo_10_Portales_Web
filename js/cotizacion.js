function generarCotizacion() {
  const cliente = document.getElementById('cliente').value;
  const productosSeleccionados = document.querySelectorAll('input[type="checkbox"]:checked');

  if (!cliente) {
    alert("Por favor, ingresa el nombre del cliente.");
    return;
  }

  let resultado = `LABORATORIO DIESEL CEMECIN\nCliente: ${cliente}\nFecha: ${new Date().toLocaleDateString('es-HN')}\n\nProductos:\n`;

  let subtotal = 0;
  productosSeleccionados.forEach(producto => {
    const nombre = producto.getAttribute('data-nombre');
    const precio = parseFloat(producto.value);
    subtotal += precio;
    resultado += `- ${nombre}: Lps. ${precio.toFixed(2)}\n`;
  });

  const isv = subtotal * 0.15;
  const total = subtotal + isv;

  resultado += `\nSubtotal: Lps. ${subtotal.toFixed(2)}\nISV 15%: Lps. ${isv.toFixed(2)}\nTOTAL A PAGAR: Lps. ${total.toFixed(2)}`;

  document.getElementById('resultado').textContent = resultado;
}

function descargarCotizacion() {
  const contenido = document.getElementById('resultado').textContent;
  if (!contenido) {
    alert("Primero genera una cotización.");
    return;
  }

  const blob = new Blob([contenido], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "cotizacion.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

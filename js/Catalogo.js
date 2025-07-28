document.addEventListener('DOMContentLoaded', () => {
  console.log('Catálogo Diesel CEMECIN listo.');

  const presentaciones = document.querySelectorAll('.presentacion');

  presentaciones.forEach(presentacion => {
    presentacion.addEventListener('click', () => {
      const titulo = presentacion.querySelector('h2').textContent;
      alert(`Detalles del producto: ${titulo}`);
    });
  });

});







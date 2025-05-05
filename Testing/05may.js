document.getElementById('contactoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = e.target.nombre.value;
  const correo = e.target.correo.value;

  alert(`Gracias, ${nombre}. Nos pondremos en contacto contigo en ${correo}.`);
  e.target.reset();
});

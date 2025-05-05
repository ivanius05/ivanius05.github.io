document.getElementById('contactoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = e.target.nombre.value;
  const correo = e.target.correo.value;

  alert(`Gracias, ${nombre}. Nos pondremos en contacto contigo en ${correo}.`);
  e.target.reset();
});

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


const ctx = document.getElementById('ventasGrafico').getContext('2d');
const ventasGrafico = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico (barras en este caso)
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'], // Etiquetas del gráfico
        datasets: [{
            label: 'Ventas por mes (€)',
            data: [1200, 1500, 1800, 1300, 2000], // Datos de las ventas
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo de las barras
            borderColor: 'rgba(54, 162, 235, 1)', // Color del borde de las barras
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

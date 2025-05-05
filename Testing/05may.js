document.getElementById('contactoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = e.target.nombre.value;
  const correo = e.target.correo.value;

  alert(`Gracias, ${nombre}. Nos pondremos en contacto contigo en ${correo}.`);
  e.target.reset();
});

// Función para cargar el archivo JSON y crear los gráficos
async function loadData() {
  const response = await fetch('05may.json'); // Asegúrate de que el archivo esté en la ubicación correcta
  const data = await response.json();

  // Crear los gráficos con los datos simulados
  new Chart(document.getElementById('ventasGrafico').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [{
        label: 'Ventas por mes (€)',
        data: [1200, 1500, 1800, 1300, 2000],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
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

  new Chart(document.getElementById('pieChart').getContext('2d'), {
    type: 'pie',
    data: data.Ventas.pieChart,
    options: { responsive: true }
  });

  new Chart(document.getElementById('lineChart').getContext('2d'), {
    type: 'line',
    data: data.Ventas.lineChart,
    options: { 
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });

  new Chart(document.getElementById('barChart').getContext('2d'), {
    type: 'bar',
    data: data.Estadísticas_de_Ventas.barChart,
    options: { 
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });

  new Chart(document.getElementById('radarChart').getContext('2d'), {
    type: 'radar',
    data: data.Rendimiento_de_Jugadores.radarChart,
    options: { 
      responsive: true,
      scale: { ticks: { beginAtZero: true, max: 100 } }
    }
  });

  new Chart(document.getElementById('scatterChart').getContext('2d'), {
    type: 'scatter',
    data: data.Estadísticas_de_Ventas.scatterChart,
    options: { 
      responsive: true,
      scales: { 
        x: { title: { display: true, text: 'Tiempo (meses)' } },
        y: { title: { display: true, text: 'Ventas' } }
      }
    }
  });
}

// Llamar a la función para cargar los datos al iniciar la página
document.addEventListener('DOMContentLoaded', loadData);

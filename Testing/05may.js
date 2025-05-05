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

// Datos simulados
const data = {
  "Ventas": {
    "lineChart": {
      "labels": ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago"],
      "datasets": [{
        "label": "Ventas Mensuales",
        "data": [50, 70, 60, 80, 95, 110, 130, 150],
        "borderColor": "rgba(75, 192, 192, 1)",
        "backgroundColor": "rgba(75, 192, 192, 0.2)",
        "fill": true
      }]
    },
    "pieChart": {
      "labels": ["Electrónica", "Ropa", "Alimentos", "Juguetes", "Accesorios"],
      "datasets": [{
        "label": "Distribución de Ventas",
        "data": [45, 20, 15, 10, 10],
        "backgroundColor": ["#FF6347", "#4CAF50", "#FF9800", "#2196F3", "#FFC107"]
      }]
    }
  },
  "Rendimiento de Jugadores": {
    "radarChart": {
      "labels": ["Velocidad", "Fuerza", "Agilidad", "Resistencia", "Técnica"],
      "datasets": [{
        "label": "Jugador A",
        "data": [85, 95, 80, 90, 97],
        "backgroundColor": "rgba(0, 123, 255, 0.2)",
        "borderColor": "rgba(0, 123, 255, 1)",
        "pointBackgroundColor": "rgba(0, 123, 255, 1)"
      }, {
        "label": "Jugador B",
        "data": [75, 85, 70, 80, 88],
        "backgroundColor": "rgba(255, 99, 132, 0.2)",
        "borderColor": "rgba(255, 99, 132, 1)",
        "pointBackgroundColor": "rgba(255, 99, 132, 1)"
      }]
    }
  },
  "Estadísticas de Ventas": {
    "barChart": {
      "labels": ["A", "B", "C", "D", "E"],
      "datasets": [{
        "label": "Calificación por Categoría",
        "data": [75, 85, 70, 90, 95],
        "backgroundColor": ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFD700"]
      }]
    },
    "scatterChart": {
      "datasets": [{
        "label": "Datos de Ventas",
        "data": [
          { "x": 5, "y": 50 },
          { "x": 10, "y": 80 },
          { "x": 15, "y": 100 },
          { "x": 20, "y": 130 },
          { "x": 25, "y": 160 },
          { "x": 30, "y": 190 }
        ],
        "backgroundColor": "rgba(75, 192, 192, 1)"
      }]
    }
  }
};

// Crea los gráficos con los datos simulados
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

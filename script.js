// Configuração dos dados do gráfico
const ctx = document.getElementById('grafico').getContext('2d');

const data = {
    labels: ['Instagram', 'Spotify', 'WhatsApp'],
    datasets: [{
        label: 'Horas de Uso por Dia',
        data: [4, 2, 6], // Dados fictícios
        backgroundColor: [
            'rgba(131, 58, 180, 0.6)', // Instagram
            'rgba(30, 215, 96, 0.6)',  // Spotify
            'rgba(37, 211, 102, 0.6)'  // WhatsApp
        ],
        borderColor: [
            'rgba(131, 58, 180, 1)',
            'rgba(30, 215, 96, 1)',
            'rgba(37, 211, 102, 1)'
        ],
        borderWidth: 1
    }]
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'top',
        },
        tooltip: {
            enabled: true,
        }
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Renderização do gráfico
new Chart(ctx, {
    type: 'bar', // Tipo de gráfico: barras
    data: data,
    options: options
});

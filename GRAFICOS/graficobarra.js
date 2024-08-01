document.addEventListener('DOMContentLoaded', function(){
    const $grafica = document.getElementById('grafica').getContext('2d');

    const etiquetas = ['Asia', 'Africa', 'America', 'Europa', 'Oceania'];

    const Datospoblacion = {
        label: "Poblacion en millones",
        data: [4600, 1350, 1000, 750, 45],
        backgroundColor: 'blue',
        borderColor: 'black',
        borderWidth: 1,
    };

    new Chart($grafica, {
        type: 'bar',
        data: {
            labels: etiquetas,
            datasets: [Datospoblacion]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'category',
                    display: true,
                    title: {
                        display: true,
                        text: 'Paises'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Poblacion en Millones'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        }
    });
});
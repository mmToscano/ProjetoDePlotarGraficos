const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'scatter',

    data: {
        datasets: [{
            label: 'Diferentes gráficos',
            data: [],
            backgroundColor: 'white',
            borderColor: 'rgb(64, 31, 211)',
            borderWidth: 3,
            pointRadius: 5,
            pointHoverRadius: 11,
            showLine: true

        }]
    },

    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
                beginAtZero: true
            }
        }
    }
});

//myChart.data.datasets[0].data[2].x valor do x do primeiro objeto no primeiro gráfico
//myChart.data.datasets[0].data[2].y valor do y do primeiro objeto no primeiro gráfico
//myChart.data.datasets[0].data[0] = {x: 10, y: 20}; Adiciona essa informação no gráfico (É preciso dar o myChart.update() depois)
//myChart.data.datasets[0].data


function rodarPrimeiraFormula(quantidade){
    myChart.data.datasets[0].data = null;
    myChart.update();

    quantidade = 21;

    object = {x: null, y: null};

    for(count = 0; count < quantidade; count++){
        myChart.data.datasets[0].data[count] = object;
    }

    let valorDoX = -50;
    for(count = 0; count < quantidade; count ++, valorDoX+= 5){
        myChart.data.datasets[0].data[count] = {x: valorDoX, y: valorDoX * valorDoX};
    }
    
    myChart.update();
}

function rodarSegundaFormula(quantidade){
    myChart.data.datasets[0].data = null;
    myChart.update();

    quantidade = 21;

    object = {x: null, y: null};

    for(count = 0; count < quantidade; count++){
        myChart.data.datasets[0].data[count] = object;
    }

    let valorDoX = -50;
    for(count = 0; count < quantidade; count ++, valorDoX+= 5){
        myChart.data.datasets[0].data[count] = {x: valorDoX, y: valorDoX * valorDoX * valorDoX};
    }
    
    myChart.update();
}




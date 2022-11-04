const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'scatter',

    data: {
        datasets: [{
            label: 'Test',
            data: [{x: -20, y: null}, {x: -10, y: null}, {x: 0, y: null}, {x: 10, y: null}, {x: 20, y: null}],
            backgroundColor: 'black',
            borderColor: 'yellow',
            borderWidth: 1,
            pointRadius: 7,
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
dataSize = myChart.data.datasets[0].data.length;

function criarValoresNoGráfico(quantidade){

    object = {x: -20, y: null};

    for(count = 0; count < quantidade; count++){

    }
}

function rodarFormula(){
    for(count = 0; count < dataSize; count++){
        xValue = myChart.data.datasets[0].data[count].x;
        myChart.data.datasets[0].data[count].y = xValue * xValue;
    }
    myChart.update();
}



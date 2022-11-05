const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'scatter',

    data: {
        datasets: [{
            label: 'Test',
            data: [],
            backgroundColor: 'black',
            borderColor: 'yellow',
            borderWidth: 1,
            pointRadius: 2,
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

function criarValoresNoGrafico(quantidade){

    object = {x: null, y: null};

    for(count = 0; count < quantidade; count++){
        myChart.data.datasets[0].data[count] = object;
    }

    let valorDoX = -50;
    for(count = 0; count < quantidade; count ++, valorDoX+= 5){
        myChart.data.datasets[0].data[count] = {x: valorDoX, y: valorDoX * valorDoX};
    }
    
    myChart.update();
    console.log(myChart.data.datasets[0].data);
}


function rodarPrimeiraFormula(){
    criarValoresNoGráfico(21);
    dataSize = myChart.data.datasets[0].data.length;

    for(count = 0; count < dataSize; count++){
        myChart.data.datasets[0].data[count].y = valorDoX * valorDoX;
    }
    myChart.update();
}



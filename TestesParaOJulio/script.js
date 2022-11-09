const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'scatter',

    data: {
        datasets: [{
            label: 'Diferentes gráficos',
            data: [],
            backgroundColor: 'white',
            borderColor: 'rgb(64, 31, 211)',
            borderWidth: 1,
            pointRadius: 0.1,
            pointHoverRadius: 7,
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

    quantidade = 81;

    object = {x: null, y: null};

    for(count = 0; count < quantidade; count++){
        myChart.data.datasets[0].data[count] = object;
    }

    let valorDoX = -40;
    for(count = 0; count < quantidade; count ++, valorDoX+= 1){
        myChart.data.datasets[0].data[count] = {x: valorDoX, y: valorDoX * valorDoX};
    }
    
    myChart.update();
}

function rodarSegundaFormula(quantidade){
    myChart.data.datasets[0].data = null;
    myChart.update();

    quantidade = 81;

    object = {x: null, y: null};

    for(count = 0; count < quantidade; count++){
        myChart.data.datasets[0].data[count] = object;
    }

    let valorDoX = -40;
    for(count = 0; count < quantidade; count ++, valorDoX+= 1){
        myChart.data.datasets[0].data[count] = {x: valorDoX, y: valorDoX * valorDoX * valorDoX};
    }
    
    myChart.update();
}

function rodarTerceiraFormula(quantidade){
    myChart.data.datasets[0].data = null;
    myChart.update();

    quantidade = 81;

    object = {x: null, y: null};

    for(count = 0; count < quantidade; count++){
        myChart.data.datasets[0].data[count] = object;
    }

    let valorDoX = -10;
    for(count = 0; count < quantidade; count ++, valorDoX+= 0.25){
        myChart.data.datasets[0].data[count] = {x: valorDoX, y: (Math.exp((valorDoX * valorDoX) * -1)) * Math.sin(Math.PI * Math.pow(valorDoX, 3))};
    }
    
    myChart.update();
}

function rodarQuartaFormula(quantidade){
    myChart.data.datasets[0].data = null;
    myChart.update();

    quantidade = 81;

    object = {x: null, y: null};

    for(count = 0; count < quantidade; count++){
        myChart.data.datasets[0].data[count] = object;
    }

    let valorDoX = -10;
    for(count = 0; count < quantidade; count ++, valorDoX+= 0.25){
        myChart.data.datasets[0].data[count] = {x: valorDoX, y: Math.sin(valorDoX)};
    }
    
    myChart.update();
}

function rodarQuintaFormula(quantidade){
    myChart.data.datasets[0].data = null;
    myChart.update();

    quantidade = 161;

    object = {x: null, y: null};

    for(count = 0; count < quantidade; count++){
        myChart.data.datasets[0].data[count] = object;
    }

    let valorDoX = -20;
    for(count = 0; count < quantidade; count ++, valorDoX+= 0.25){
        myChart.data.datasets[0].data[count] = {x: valorDoX, y: Math.sin(2 * Math.sin(2 * Math.sin(2 * Math.sin(valorDoX))))};
    }
    
    myChart.update();
}



//Gráficos legais:
//{x: valorDoX, y: Math.sin(valorDoX)}
//{x: valorDoX, y: Math.sin(2 * Math.sin(2 * Math.sin(2 * Math.sin(valorDoX))))}
//{x: valorDoX, y: (Math.exp((valorDoX * valorDoX) * -1)) * Math.sin(Math.PI * Math.pow(valorDoX, 3))}
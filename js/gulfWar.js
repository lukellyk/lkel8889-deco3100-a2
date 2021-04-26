const dataSource = "../data/gulf-war-data.csv"

function loadData() {
    Plotly.d3.csv(dataSource, function (data) {
        console.log(data);
      processData(data);
    });
  }

function processData(allRows) {
    let x = [], gdp = [], cmr = [], hdi = [];
    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];
        x.push(row['year']);
        gdp.push(row['GDP']);
        cmr.push(row['CMR']);
        hdi.push(row['HDR']);
    }
    makePlot(x,gdp,cmr,hdi);
}   

function makePlot(x,gdp,cmr,hdi){
    var traces = [{
        name: 'GDP at Current Prices per Capita ($USD)',
        x: x,
        y: gdp
    },
    {
        name: 'Child Mortality Rate',
        x: x,
        y: cmr
    },
    {
        name: 'Human Development Index',
        x: x,
        y: hdi
    }];

    var layout = {
        font: {
            size: 18,
            family: "Bilo",
            color: 'c4c4c4'
        },
        xaxis: {
            color: '000000', //learn how to change colour of just title
            title: "Year"
        },
        yaxis: {
            // title: "Amount of Use"
        },
        showlegend: false,
        legend: {
            x: 0.1,
            xanchor: "left",
            y: 0.9
        },
        margin: {
            t: 20,
            b: 40,
            r: 50,
            l: 50
        }
    };

    var config = {
        responsive: true,
        scrollZoom: true,
        displayModeBar: false
    };

    Plotly.newPlot('gulfWarPlot', traces, layout, config);
};

loadData();
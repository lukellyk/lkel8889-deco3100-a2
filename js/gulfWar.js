const dataSource = "../data/gulf-war-data-indexed.csv"

function loadData() {
    Plotly.d3.csv(dataSource, function (data) {
        console.log(data);
      processData(data);
    });
  }

function processData(allRows) {
    let x = [], cmr = [], hdi = [], pcmr = [], phdi = [];
    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];
        x.push(row['Year']);
        cmr.push(row['CMR']);
        hdi.push(row['HDI']);
        pcmr.push(row['pCMR']);
        phdi.push(row['pHDI']);
    }
    makePlot(x,cmr,hdi,pcmr,phdi);
}   

function makePlot(x,cmr,hdi,pcmr,phdi){
    var traces = [
    {
        name: 'Child Mortality Rate',
        x: x,
        y: cmr,
        connectgaps: true
    },
    {
        name: 'Human Development Index',
        x: x,
        y: hdi
    },
    {
        name: 'Predicted Child Mortality Rate',
        x: x,
        y: pcmr,
        line:{
            dash: 'dot',
            color: 'rgb(255,0,0)'
        }
    },
    {
        name: 'Predicted Human Development Index',
        x: x,
        y: phdi,
        line:{
            dash: 'dot',
            color: 'rgb(255,0,0)'
        }
    }];

    var layout = {
        font: {
            size: 18,
            family: "Bilo",
            color: 'c4c4c4'
        },
        xaxis: {
            title: "Year"
        },
        yaxis: {
            title: "Rate of Change (Indexed to 100)"
        },
        showlegend: false,
        legend: {
            x: 0.1,
            xanchor: "left",
            y: 0.9
        },
        margin: {
            t: 20,
            b: 50,
            r: 50,
        }
    };

    var config = {
        responsive: true,
        scrollZoom: true,
        displayModeBar: false,
    };

    Plotly.newPlot('gulfWarPlot', traces, layout, config);
};

loadData();
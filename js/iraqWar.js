const dataSourceI = "https://raw.githubusercontent.com/lukellyk/lkel8889-deco3100-a2/master/data/iraq-war-data-indexed.csv"

function loadDataI() {
    Plotly.d3.csv(dataSourceI, function (data) {
        console.log(data);
      processDataI(data);
    });
  }

function processDataI(allRows) {
    let x = [], cmr = [], hdi = [], pcmr = [], phdi = [];
    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];
        x.push(row['Year']);
        cmr.push(row['CMR']);
        hdi.push(row['HDI']);
        pcmr.push(row['pCMR']);
        phdi.push(row['pHDI']);
    }
    makePlotI(x,cmr,hdi,pcmr,phdi);
}   

function makePlotI(x,cmr,hdi,pcmr,phdi){
    var traces = [
    {
        name: 'CMR',
        x: x,
        y: cmr,
        connectgaps: true
    },
    {
        name: 'HDI',
        x: x,
        y: hdi
    },
    {
        name: 'Predicted CMR',
        x: x,
        y: pcmr,
        line:{
            dash: 'dot',
            color: 'rgb(255,0,0)'
        }
    },
    {
        name: 'Predicted HDI',
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
            title: "CMR and HDI (Indexed to 100)",
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
        },
        annotations: [
            {
              x: 2003,
              y: 0,
              xref: 'x',
              yref: 'y',
              text: 'Beginning of War',
              showarrow: true,
              arrowhead: 0,
              ax: 0,
              ay: -350
            },
            {
                x: 2009,
                y: 0,
                xref: 'x',
                yref: 'y',
                text: 'End of War',
                showarrow: true,
                arrowhead: 0,
                ax: 0,
                ay: -370
              }
          ],
          hoverlabel: {
            font: {
                family: "Bilo",
                color: "#ffffff"
            },
            bordercolor: "rgba(255, 255, 255, 0)"
        }
    };

    var config = {
        responsive: true,
        scrollZoom: true,
        displayModeBar: false,
    };
    console.log('iraq')
    Plotly.newPlot('iraqWarPlot', traces, layout, config);
};

loadDataI();
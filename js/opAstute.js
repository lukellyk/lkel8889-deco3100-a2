const dataSourceOP = "../data/timor-war-data-indexed.csv"

function loadDataOP() {
    Plotly.d3.csv(dataSourceOP, function (data) {
        console.log(data);
      processDataOP(data);
    });
  }

function processDataOP(allRows) {
    let x = [], cmr = [], ihdi = [], thdi = [], pcmr = [], phdi = [];
    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];
        x.push(row['Year']);
        cmr.push(row['CMR']);
        ihdi.push(row['indoHDI']);
        thdi.push(row['timorHDI']);
        pcmr.push(row['pCMR']);
        phdi.push(row['pHDI']);
    }
    makePlotOP(x,cmr,ihdi,thdi,pcmr,phdi);
}   

function makePlotOP(x,cmr,ihdi,thdi,pcmr,phdi){
    var traces = [
    {
        name: 'CMR',
        x: x,
        y: cmr,
        connectgaps: true
    },
    {
        name: 'Indonesia HDI',
        x: x,
        y: ihdi
    },
    {
        name: 'Timor Leste HDI',
        x: x,
        y: thdi
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
            title: "Rate of Change (Indexed to 100)",
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
              x: 2006,
              y: 0,
              xref: 'x',
              yref: 'y',
              text: 'Beginning of War',
              showarrow: true,
              arrowhead: 0,
              ax: 0,
              ay: -300
            },
            {
                x: 2013,
                y: 0,
                xref: 'x',
                yref: 'y',
                text: 'End of War',
                showarrow: true,
                arrowhead: 0,
                ax: 0,
                ay: -320
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
    console.log('astute')
    Plotly.newPlot('opAstutePlot', traces, layout, config);
};

loadDataOP();
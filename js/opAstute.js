//js is almost identical to other graphs
//refer to afghanistanWar.js for comments

const dataSourceOP = "https://raw.githubusercontent.com/lukellyk/lkel8889-deco3100-a2/master/data/timor-war-data-indexed.csv"

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
        title: {
            text: "Timor-Leste's HDI & CMR since 1990",
            font: {
                family: 'p22-mackinac-pro'
            }
        },
        font: {
            size: 18,
            family: "Bilo",
            color: 'c4c4c4'
        },
        xaxis: {
            title: "Year",
            titlefont: {
                color: '000000'
            },
        },
        yaxis: {
            title: "CMR and HDI (Indexed to 100)",
            titlefont: {
                color: '000000'
            },
        },
        showlegend: false,
        legend: {
            x: 0.1,
            xanchor: "left",
            y: 0.9
        },
        margin: {
            t: 50,
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
                ay: -280
              },
              {
                x: 2000,
                y: 0,
                xref: 'x',
                yref: 'y',
                text: 'Sep. from Indo. *',
                showarrow: true,
                arrowhead: 0,
                ax: 0,
                ay: -280
              }
          ],
          hoverlabel: {
            font: {
                family: "Bilo",
                color: "#ffffff"
            },
            bordercolor: "rgba(255, 255, 255, 0)",
            namelength: 20
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
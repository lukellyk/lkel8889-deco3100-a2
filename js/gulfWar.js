//js is almost identical to other graphs
//refer to afghanistanWar.js for comments

const dataSource = "https://raw.githubusercontent.com/lukellyk/lkel8889-deco3100-a2/master/data/gulf-war-data-indexed.csv"

function loadDataG() {
    Plotly.d3.csv(dataSource, function (data) {
        console.log(data);
      processDataG(data);
    });
  }

function processDataG(allRows) {
    let x = [], cmr = [], hdi = [], pcmr = [], phdi = [];
    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];
        x.push(row['Year']);
        cmr.push(row['CMR']);
        hdi.push(row['HDI']);
        pcmr.push(row['pCMR']);
        phdi.push(row['pHDI']);
    }
    makePlotG(x,cmr,hdi,pcmr,phdi);
}   

function makePlotG(x,cmr,hdi,pcmr,phdi){
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
        title: {
            text: "Kuwait's HDI & CMR since 1990",
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
                x: 1991,
                y: 0,
                xref: 'x',
                yref: 'y',
                text: 'End of War',
                showarrow: true,
                arrowhead: 0,
                ax: 0,
                ay: -350
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
    console.log('gulf')
    Plotly.newPlot('gulfWarPlot', traces, layout, config);
};

loadDataG();
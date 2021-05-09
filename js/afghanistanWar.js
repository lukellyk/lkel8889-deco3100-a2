// import data from github
const dataSourceA = "https://raw.githubusercontent.com/lukellyk/lkel8889-deco3100-a2/master/data/afghanistan-war-data-indexed.csv"

// load csv
function loadDataA() {
    Plotly.d3.csv(dataSourceA, function (data) {
        console.log(data);
      processDataA(data);
    });
  }

// process data and split into rows and columns
function processDataA(allRows) {
    let x = [], cmr = [], hdi = [], pcmr = [], phdi = [];
    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];
        //separate data by column headers
        x.push(row['Year']);
        cmr.push(row['CMR']);
        hdi.push(row['HDI']);
        pcmr.push(row['pCMR']);
        phdi.push(row['pHDI']);
    }
    // initiate plot creation function
    makePlotA(x,cmr,hdi,pcmr,phdi);
}   

function makePlotA(x,cmr,hdi,pcmr,phdi){
    var traces = [
    {
        // set up child mortality rate trace
        name: 'CMR',
        x: x,
        y: cmr,
        // connecting gaps because data only occurs every 5 years
        connectgaps: true
    },
    {
        // set up human development index trace
        name: 'HDI',
        x: x,
        y: hdi
    },
    {
        // set up predicted cmr trace
        name: 'Predicted CMR',
        x: x,
        y: pcmr,
        // make line dotted and red to make prediction intent clear
        line:{
            dash: 'dot',
            color: 'rgb(255,0,0)'
        }
    },
    {
        // set up predicted cmr trace
        name: 'Predicted HDI',
        x: x,
        y: phdi,
        // make line dotted and red to make prediction intent clear
        line:{
            dash: 'dot',
            color: 'rgb(255,0,0)'
        }
    }];

    var layout = {
        // define title
        title: {
            text: "Afghanistan's HDI & CMR since 1990",
            font: {
                family: 'p22-mackinac-pro'
            }
        },
        // setting font for graph - sans title
        font: {
            size: 18,
            family: "Bilo",
            color: 'c4c4c4'
        },
        // axis titles
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
        // annotations depicting important events in the conflict
        annotations: [
            {
              x: 2001,
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
                x: 2021,
                y: 0,
                xref: 'x',
                yref: 'y',
                text: 'Australian Withdrawal from War',
                showarrow: true,
                arrowhead: 0,
                ax: 0,
                ay: -330
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
    //config of graph
    var config = {
        responsive: true,
        scrollZoom: true,
        displayModeBar: false,
    };
    //print afghanistan to terminal to make sure function is running
    console.log('afghanistan')
    Plotly.newPlot('afghanistanWarPlot', traces, layout, config);
};

loadDataA();
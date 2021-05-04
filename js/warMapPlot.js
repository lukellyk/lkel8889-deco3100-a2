let countries = ['Iraq', 'Afghanistan', 'Kuwait', 'Timor-Leste', 'Syria', 'Libya', 'Nigeria']
let dumbyData = [1,1,1,1,1,1,1]

var data = [{
    type: 'choropleth',
    locationmode: 'country names',
    locations: countries,
    z: dumbyData,
    colorscale: [
        [0, 'rgb(255,255,255)'], [1, 'rgb(100,149,237)']
    ],
    showscale: false,
    zmin: 0,
    zmax: 1,
    marker: {
        line:{
            width: 0
        }
    },
    hovermode: 'closest',
    hoverlabel: {
        font: {
            family: "Bilo",
            color: 'c4c4c4'
        },
    }
}];

var layout = {
    geo: {
        projection: {
            type: 'robinson',
        },
        showframe: false
    },    
    font: {
        size: 18,
        family: "Bilo",
        color: 'c4c4c4'
    },
    showlegend: false,
    margin: {
        t: 0,
        b: 0,
        r: 10,
        l: 10
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
};

Plotly.newPlot("warMapPlot", data, layout);

// create list of countries with some dumby data in order to get them to display on map
let countries = ['Iraq', 'Afghanistan', 'Kuwait', 'Timor-Leste', 'Syria']
let dumbyData = [1,1,1,1,1]

var data = [{
    // define type of map
    type: 'choropleth',
    // define how country names will be parsed in
    locationmode: 'country names',
    // define what countries need to be highlighted
    locations: countries,
    z: dumbyData,
    // set colour scale (white or blue)
    colorscale: [
        [0, 'rgb(255,255,255)'], [1, 'rgb(100,149,237)']
    ],
    showscale: false, // hiding colour scale because its unneccesary
    zmin: 0,
    zmax: 1,
    marker: {
        line:{
            width: 0
        }
    },
    hovermode: 'closest',
    //format label that apears when hovering
    hoverlabel: {
        font: {
            family: "Bilo",
            color: 'c4c4c4'
        },
    }
}];

var layout = {
    geo: {
        // set up what type of map will be used
        projection: {
            type: 'robinson',
        },
        // hide outline of map window
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
    // make background transparent
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
};

// push map to DOM
Plotly.newPlot("warMapPlot", data, layout);

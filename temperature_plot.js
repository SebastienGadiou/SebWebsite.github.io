
var dataTemperature = [{'x': ['Prague', 'Washington D.C.', 'Paris'], 'y': [1.0499999523162842, 5.388999938964844, 3.450000047683716], 'type': 'bar', 'name': 'Temperature', 'marker': {'color': '#ff7f0e'}}];

var layoutTemperature = {
    title: 'Average Temperature by City',
    xaxis: { title: 'City' },
    yaxis: { title: 'Average Temperature (°C)' }
};

Plotly.newPlot('plot-temperature', dataTemperature, layoutTemperature);

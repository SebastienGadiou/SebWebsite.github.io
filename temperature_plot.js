
var dataTemperature = [{'x': ['Prague', 'Washington D.C.', 'Paris'], 'y': [21.049999237060547, 9.18899917602539, 24.75], 'type': 'bar', 'name': 'Temperature', 'marker': {'color': '#ff7f0e'}}];

var layoutTemperature = {
    title: 'Average Temperature by City',
    xaxis: { title: 'City' },
    yaxis: { title: 'Average Temperature (°C)' }
};

Plotly.newPlot('plot-temperature', dataTemperature, layoutTemperature);

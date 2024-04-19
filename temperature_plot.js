
var dataTemperature = [{'x': ['Prague', 'Washington D.C.', 'Paris'], 'y': [9.100000381469727, 11.888999938964844, 10.0], 'type': 'bar', 'name': 'Temperature', 'marker': {'color': '#ff7f0e'}}];

var layoutTemperature = {
    title: 'Average Temperature by City',
    xaxis: { title: 'City' },
    yaxis: { title: 'Average Temperature (°C)' }
};

Plotly.newPlot('plot-temperature', dataTemperature, layoutTemperature);

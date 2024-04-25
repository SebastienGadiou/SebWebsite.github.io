
var dataTemperature = [{'x': ['Prague', 'Washington D.C.', 'Paris'], 'y': [7.099999904632568, 10.58899974822998, 9.699999809265137], 'type': 'bar', 'name': 'Temperature', 'marker': {'color': '#ff7f0e'}}];

var layoutTemperature = {
    title: 'Average Temperature by City',
    xaxis: { title: 'City' },
    yaxis: { title: 'Average Temperature (°C)' }
};

Plotly.newPlot('plot-temperature', dataTemperature, layoutTemperature);

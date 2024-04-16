
var dataTemperature = [{'x': ['Prague', 'Washington D.C.', 'Paris'], 'y': [7.800000190734863, 18.088998794555664, 8.199999809265137], 'type': 'bar', 'name': 'Temperature', 'marker': {'color': '#ff7f0e'}}];

var layoutTemperature = {
    title: 'Average Temperature by City',
    xaxis: { title: 'City' },
    yaxis: { title: 'Average Temperature (°C)' }
};

Plotly.newPlot('plot-temperature', dataTemperature, layoutTemperature);

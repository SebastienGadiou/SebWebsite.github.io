
var dataTemperature = [{'x': ['Prague', 'Washington D.C.', 'Paris'], 'y': [24.149999618530273, 23.088998794555664, 17.299999237060547], 'type': 'bar', 'name': 'Temperature', 'marker': {'color': '#ff7f0e'}}];

var layoutTemperature = {
    title: 'Average Temperature by City',
    xaxis: { title: 'City' },
    yaxis: { title: 'Average Temperature (°C)' }
};

Plotly.newPlot('plot-temperature', dataTemperature, layoutTemperature);

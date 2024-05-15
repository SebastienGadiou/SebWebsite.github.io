
var dataTemperature = [{'x': ['Prague', 'Washington D.C.', 'Paris'], 'y': [24.5, 15.638999938964844, 18.899999618530273], 'type': 'bar', 'name': 'Temperature', 'marker': {'color': '#ff7f0e'}}];

var layoutTemperature = {
    title: 'Average Temperature by City',
    xaxis: { title: 'City' },
    yaxis: { title: 'Average Temperature (°C)' }
};

Plotly.newPlot('plot-temperature', dataTemperature, layoutTemperature);

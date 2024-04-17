
var dataTemperature = [{'x': ['Prague', 'Washington D.C.', 'Paris'], 'y': [8.550000190734863, 22.038999557495117, 9.649999618530273], 'type': 'bar', 'name': 'Temperature', 'marker': {'color': '#ff7f0e'}}];

var layoutTemperature = {
    title: 'Average Temperature by City',
    xaxis: { title: 'City' },
    yaxis: { title: 'Average Temperature (°C)' }
};

Plotly.newPlot('plot-temperature', dataTemperature, layoutTemperature);

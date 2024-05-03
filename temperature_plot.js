
var dataTemperature = [{'x': ['Prague', 'Washington D.C.', 'Paris'], 'y': [13.300000190734863, 20.788999557495117, 8.350000381469727], 'type': 'bar', 'name': 'Temperature', 'marker': {'color': '#ff7f0e'}}];

var layoutTemperature = {
    title: 'Average Temperature by City',
    xaxis: { title: 'City' },
    yaxis: { title: 'Average Temperature (°C)' }
};

Plotly.newPlot('plot-temperature', dataTemperature, layoutTemperature);

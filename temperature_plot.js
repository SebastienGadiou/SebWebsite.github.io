
var dataTemperature = [{'x': ['Prague', 'Washington D.C.', 'Paris'], 'y': [13.550000190734863, 17.538999557495117, 12.25], 'type': 'bar', 'name': 'Temperature', 'marker': {'color': '#ff7f0e'}}];

var layoutTemperature = {
    title: 'Average Temperature by City',
    xaxis: { title: 'City' },
    yaxis: { title: 'Average Temperature (°C)' }
};

Plotly.newPlot('plot-temperature', dataTemperature, layoutTemperature);

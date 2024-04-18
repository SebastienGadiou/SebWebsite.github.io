
var dataTemperature = [{'x': ['Prague', 'Washington D.C.', 'Paris'], 'y': [3.75, 15.93899917602539, 3.8499999046325684], 'type': 'bar', 'name': 'Temperature', 'marker': {'color': '#ff7f0e'}}];

var layoutTemperature = {
    title: 'Average Temperature by City',
    xaxis: { title: 'City' },
    yaxis: { title: 'Average Temperature (°C)' }
};

Plotly.newPlot('plot-temperature', dataTemperature, layoutTemperature);

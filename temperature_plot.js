
var dataTemperature = [{'x': ['Prague', 'Washington D.C.', 'Paris'], 'y': [17.450000762939453, 16.68899917602539, 14.600000381469727], 'type': 'bar', 'name': 'Temperature', 'marker': {'color': '#ff7f0e'}}];

var layoutTemperature = {
    title: 'Average Temperature by City',
    xaxis: { title: 'City' },
    yaxis: { title: 'Average Temperature (°C)' }
};

Plotly.newPlot('plot-temperature', dataTemperature, layoutTemperature);

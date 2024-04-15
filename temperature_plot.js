
var dataTemperature = [{'x': ['Prague', 'Washington D.C.', 'Paris'], 'y': [14.550000190734863, 18.23900032043457, 14.100000381469727], 'type': 'bar', 'name': 'Temperature', 'marker': {'color': '#ff7f0e'}}];

var layoutTemperature = {
    title: 'Average Temperature by City',
    xaxis: { title: 'City' },
    yaxis: { title: 'Average Temperature (°C)' }
};

Plotly.newPlot('plot-temperature', dataTemperature, layoutTemperature);


var dataTemperature = [{'x': ['Prague', 'Washington D.C.', 'Paris'], 'y': [5.75, 13.488999366760254, 6.699999809265137], 'type': 'bar', 'name': 'Temperature', 'marker': {'color': '#ff7f0e'}}];

var layoutTemperature = {
    title: 'Average Temperature by City',
    xaxis: { title: 'City' },
    yaxis: { title: 'Average Temperature (°C)' }
};

Plotly.newPlot('plot-temperature', dataTemperature, layoutTemperature);

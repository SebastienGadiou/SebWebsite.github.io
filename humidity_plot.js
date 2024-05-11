
var dataHumidity = [{'x': ['Prague', 'Washington D.C.', 'Paris'], 'y': [38.0, 92.0, 41.0], 'type': 'bar', 'name': 'Humidity', 'marker': {'color': '#1f77b4'}}];

var layoutHumidity = {
    title: 'Average Humidity by City',
    xaxis: { title: 'City' },
    yaxis: { title: 'Average Humidity (%)' }
};

Plotly.newPlot('plot-humidity', dataHumidity, layoutHumidity);

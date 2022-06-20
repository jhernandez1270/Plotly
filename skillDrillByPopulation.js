var sortedCities = cityGrowths.sort((a,b) =>
a.population - b.population).reverse();

var topSevenCities = sortedCities.slice(0,7);

var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.population));

var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Top 7 Largest Cities by Population",
    xaxis: {title: "City" },
    yaxis: {title: "City Population"}
  };
  Plotly.newPlot("bar-plot", data, layout);
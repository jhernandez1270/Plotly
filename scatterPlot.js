var trace1 = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    mode: 'markers',
    type: 'scatter',
    name: 'Luncheon Options',
    // text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
    marker: { size: 12 }
  };
  
  var trace2 = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: 'markers',
    type: 'scatter',
    name: 'Beverage Options',
    // text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    marker: { size: 12 }
  };
  
  var data = [ trace1, trace2 ];
  
  var layout = {
    xaxis: { title: "Food Options"
    },
    yaxis: {
      title: "Number of Respondants"
    },
    title:'Luncheon and Beverage Options'
  };
  
  Plotly.newPlot('plotArea', data, layout);
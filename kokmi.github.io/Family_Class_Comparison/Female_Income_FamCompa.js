  var data = [
    {id: "Low", x: 239,  y: 20.6},
    {id: "Low", x: 241,  y: 28.0},
    {id: "Low", x: 243,  y: 23.4},
    {id: "Low", x: 245,  y: 26.6},
    {id: "Low", x: 251,  y: 29.3},
    {id: "Low", x: 253,  y: 28.4},
    {id: "Low", x: 255,  y: 28.0},
    {id: "Low", x: 257,  y: 30.8},
    {id: "Low", x: 261,  y: 26.3},
    {id: "Low", x: 263,  y: 26.3},
    {id: "Middle", x: 239,  y: 20.8},
    {id: "Middle", x: 241,  y: 30.4},
    {id: "Middle", x: 243,  y: 25.7},
    {id: "Middle", x: 245,  y: 28.5},
    {id: "Middle", x: 251,  y: 36.0},
    {id: "Middle", x: 253,  y: 38.9},
    {id: "Middle", x: 255,  y: 30.8},
    {id: "Middle", x: 257,  y: 32.0},
    {id: "Middle", x: 261,  y: 29.4},
    {id: "Middle", x: 263,  y: 28.2},
    {id: "High", x: 239,  y: 21.1},
    {id: "High", x: 241,  y: 33.0},
    {id: "High", x: 243,  y: 28.1},
    {id: "High", x: 245,  y: 30.5},
    {id: "High", x: 251,  y: 43.5},
    {id: "High", x: 253,  y: 52.1},
    {id: "High", x: 255,  y: 33.7},
    {id: "High", x: 257,  y: 33.3},
    {id: "High", x: 261,  y: 32.6},
    {id: "High", x: 263,  y: 30.1},
  ];
  
  new d3plus.BarChart()
    .data(data)
    .barPadding(0)
    .groupPadding(40)
    .render();


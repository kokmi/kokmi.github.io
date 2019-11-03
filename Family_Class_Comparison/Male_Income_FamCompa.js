 var data = [
    {id: "Low",    x: 239,  y: 28.9},
    {id: "Low",   x: 241,  y: 27.5},
    {id: "Low",   x: 243,  y: 23.6},
    {id: "Low",   x: 245,  y: 28.4},
    {id: "Low",   x: 251,  y: 27.7},
    {id: "Low",   x: 253,  y: 30.3},
    {id: "Low",   x: 255,  y: 29.2},
    {id: "Low",   x: 257,  y: 34.2},
    {id: "Low",   x: 261,  y: 32.2},
    {id: "Low",   x: 263,  y: 28.5},
    {id: "Middle",   x: 239,  y: 30.7},
    {id: "Middle",   x: 241,  y: 33.5},
    {id: "Middle",   x: 243,  y: 25.0},
    {id: "Middle",   x: 245,  y: 31.3},
    {id: "Middle",   x: 251,  y: 30.1},
    {id: "Middle",   x: 253,  y: 29.8},
    {id: "Middle",   x: 255,  y: 29.7},
    {id: "Middle",   x: 257,  y: 37.6},
    {id: "Middle",   x: 261,  y: 40.2},
    {id: "Middle",   x: 263,  y: 28.5},
    {id: "High",   x: 239,  y: 32.4},
    {id: "High",   x: 241,  y: 39.6},
    {id: "High",   x: 243,  y: 26.4},
    {id: "High",   x: 245,  y: 33.7},
    {id: "High",   x: 251,  y: 32.6},
    {id: "High",   x: 253,  y: 29.2},
    {id: "High",   x: 255,  y: 30.2},
    {id: "High",   x: 257,  y: 41.0},
    {id: "High",   x: 261,  y: 49.4},
    {id: "High",   x: 263,  y: 28.6},
  ];
  
  new d3plus.BarChart()
    .data(data)
    .barPadding(0)
    .groupPadding(40)
    .render();
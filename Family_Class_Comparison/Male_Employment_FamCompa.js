var data = [
    {id: "Low",   x: 239,  y: 0.66},
    {id: "Low",   x: 241,  y: 0.70},
    {id: "Low",   x: 243,  y: 0.67},
    {id: "Low",   x: 245,  y: 0.74},
    {id: "Low",   x: 251,  y: 0.72},
    {id: "Low",   x: 253,  y: 0.74},
    {id: "Low",   x: 255,  y: 0.75},
    {id: "Low",   x: 257,  y: 0.81},
    {id: "Low",   x: 261,  y: 0.80},
    {id: "Low",   x: 263,  y: 0.75},
    {id: "Middle",   x: 239,  y: 0.63},
    {id: "Middle",   x: 241,  y: 0.75},
    {id: "Middle",   x: 243,  y: 0.69},
    {id: "Middle",   x: 245,  y: 0.78},
    {id: "Middle",   x: 251,  y: 0.77},
    {id: "Middle",   x: 253,  y: 0.68},
    {id: "Middle",   x: 255,  y: 0.74},
    {id: "Middle",   x: 257,  y: 0.82},
    {id: "Middle",   x: 261,  y: 0.90},
    {id: "Middle",   x: 263,  y: 0.74},
    {id: "High",   x: 239,  y: 0.62},
    {id: "High",   x: 241,  y: 0.78},
    {id: "High",   x: 243,  y: 0.71},
    {id: "High",   x: 245,  y: 0.80},
    {id: "High",   x: 251,  y: 0.80},
    {id: "High",   x: 253,  y: 0.65},
    {id: "High",   x: 255,  y: 0.74},
    {id: "High",   x: 257,  y: 0.83},
    {id: "High",   x: 261,  y: 0.97},
    {id: "High",   x: 263,  y: 0.74},
  ];
  
  new d3plus.BarChart()
    .data(data)
    .barPadding(0)
    .groupPadding(40)
    .render();
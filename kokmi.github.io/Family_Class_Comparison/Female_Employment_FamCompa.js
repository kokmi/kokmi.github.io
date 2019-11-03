var data = [
    {id: "Low", x: 239,  y: 0.52},
    {id: "Low", x: 241,  y: 0.78},
    {id: "Low", x: 243,  y: 0.73},
    {id: "Low", x: 245,  y: 0.80},
    {id: "Low", x: 251,  y: 0.83},
    {id: "Low", x: 253,  y: 0.77},
    {id: "Low", x: 255,  y: 0.78},
    {id: "Low", x: 257,  y: 0.80},
    {id: "Low", x: 261,  y: 0.78},
    {id: "Low", x: 263,  y: 0.75},
    {id: "Midlle", x: 239,  y: 0.48},
    {id: "Midlle", x: 241,  y: 0.77},
    {id: "Midlle", x: 243,  y: 0.82},
    {id: "Midlle", x: 245,  y: 0.83},
    {id: "Midlle", x: 251,  y: 0.89},
    {id: "Midlle", x: 253,  y: 0.82},
    {id: "Midlle", x: 255,  y: 0.80},
    {id: "Midlle", x: 257,  y: 0.80},
    {id: "Midlle", x: 261,  y: 0.81},
    {id: "Midlle", x: 263,  y: 0.73},
    {id: "High", x: 239,  y: 0.45},
    {id: "High", x: 241,  y: 0.77},
    {id: "High", x: 243,  y: 0.88},
    {id: "High", x: 245,  y: 0.84},
    {id: "High", x: 251,  y: 0.93},
    {id: "High", x: 253,  y: 0.86},
    {id: "High", x: 255,  y: 0.80},
    {id: "High", x: 257,  y: 0.80},
    {id: "High", x: 261,  y: 0.84},
    {id: "High", x: 263,  y: 0.72}
  ];
  
  new d3plus.BarChart()
    .data(data)
    .barPadding(0)
    .groupPadding(40)
    .render();
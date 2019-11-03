 var myData = [
    {id: "Male",   x: 239,  y: 0.68},
    {id: "Male",   x: 241,  y: 0.70},
    {id: "Male",   x: 243,  y: 0.66},
    {id: "Male",   x: 245,  y: 0.73},
    {id: "Male",   x: 251,  y: 0.70},
    {id: "Male",   x: 253,  y: 0.76},
    {id: "Male",   x: 255,  y: 0.74},
    {id: "Male",   x: 257,  y: 0.80},
    {id: "Male",   x: 261,  y: 0.75},
    {id: "Male",   x: 263,  y: 0.75},
    {id: "Female", x: 239,  y: 0.51},
    {id: "Female", x: 241,  y: 0.78},
    {id: "Female", x: 243,  y: 0.70},
    {id: "Female", x: 245,  y: 0.78},
    {id: "Female", x: 251,  y: 0.80},
    {id: "Female", x: 253,  y: 0.75},
    {id: "Female", x: 255,  y: 0.78},
    {id: "Female", x: 257,  y: 0.81},
    {id: "Female", x: 261,  y: 0.76},
    {id: "Female", x: 263,  y: 0.75}
  ];
  
 new d3plus.BarChart()
    .config({
      data: myData,
      discrete: "y",
      groupBy: "id",
      x: "y",
      y: "x",
      xConfig: {
        title: "Hispanic People Employment Rate-Grew up in Here (%)",
        titleConfig: {
          fontColor: "green"  
        },
      },
      yConfig: {
        title: "Tracts",
        titleConfig: {
          fontColor: "green"
        }
      }
    })
    .render();
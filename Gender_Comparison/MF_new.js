  <meta charset="utf-8">
  <script src="https://d3plus.org/js/d3plus-plot.v0.8.full.min.js"></script>

  <style>

    body {
      margin: 0;
      overflow: show;
    }

  </style>


<body></body>

<script>

  var myData = [
  {id: "Male",   x: 239,  y: 28.7},
    {id: "Male",   x: 241,  y: 27.0},
    {id: "Male",   x: 243,  y: 23.0},
    {id: "Male",   x: 245,  y: 28.2},
    {id: "Male",   x: 251,  y: 27.1},
    {id: "Male",   x: 253,  y: 30.5},
    {id: "Male",   x: 255,  y: 29.1},
    {id: "Male",   x: 257,  y: 34.5},
    {id: "Male",   x: 261,  y: 29.8},
    {id: "Male",   x: 263,  y: 29.1},
    {id: "Female", x: 239,  y: 19.9},
    {id: "Female", x: 241,  y: 27.9},
    {id: "Female", x: 243,  y: 23.2},
    {id: "Female", x: 245,  y: 26.4},
    {id: "Female", x: 251,  y: 28.6},
    {id: "Female", x: 253,  y: 27.2},
    {id: "Female", x: 255,  y: 27.7},
    {id: "Female", x: 257,  y: 30.9},
    {id: "Female", x: 261,  y: 22.7},
    {id: "Female", x: 263,  y: 26.2}
    ];
  
  new d3plus.BarChart()
    .config({
      data: myData,
      discrete: "y",
      groupBy: "id",
      x: "y",
      y: "x",
      xConfig: {
        title: "Hispanic People Individual Income-Grew up here",
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

</script>

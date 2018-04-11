/****

  First, we're going to write a function to draw our plot. We can call this function when the page loads and also when the user filters the content.

  Our drawPlot() function will take one parameter -- the category we want to show.

****/

var xValue=['83%','74%','70%','69%','65%','63%','61%','61%','60%','60%','59%','59%','59%','58%','58%','56%','54%','54%','51%','49%','46%','42%','39%','37%', ];

var feminist = {
  y: ['India ', 'China ', 'Italy ', 'South Africa ', 'France ', 'Spain ', 'Sweden ', 'Mexico ', 'Serbia ', 'Canada ', 'Great Britian ', 'Argentina ', 'Belgium ', 'Turkey ', 'Poland ', 'Brazil ', 'South Korea ' , 'Hungary ' , 'Japan ','Russia ','Germany ',], // y is major category
  x: [83,74,70,69,65,63,61,61,60,60,59,59,59,58,58,56,54,54,51,49,46,42,39,37, ], // x is unemplyment rate
  type: 'bar',
  text: xValue,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: '#213444',
    opacity: .9,

  },
  name: 'Feminist Rate',
  orientation: 'h',

};

// Create the data object as an array of our data series objects:
var data = [feminist];

// The layout object provides options for how our visualization will appear:
var layout = {
  title:'% of Adults 18-64 Who Identify As Feminist',
  titlefont: {
      size: 18,
      color: '#213444'
    },
  xaxis: {tickfont: {
      size: 11,
      color: '#213444'
    }},
  yaxis: {
    tickfont: {
      size: 11,
      color: '#213444'
    }
  },
  showlegend: false,
  margin: {
    l: 260
  },
  font: {
      family: 'Arial, sans-serif',
      size: 10,
      color: "#F45B69",
    }
}

var options = {
 staticPlot: true, // disable zoom, save and other toolbar options
}

Plotly.newPlot('bargraph', data, layout, options);

















var drawPlot = function(category) {

  Plotly.d3.csv('dataviz.csv', function(err, rows){


    /***
    This function is useful for returning an array of values corresponding to a column in your CSV file. It's not built in to PLotly, so you have to declare it as follows:
    ***/
    var unpack = function(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }


    console.log(rows);

    /***
    If the category variable doesn't equal "all", we'll filter our rows.
    ***/





    /*** Now that we know how to pull the data from a CSV, we can create our data objects as we've done before: ***/
    var country = {
      // x and y are arrays of numeric values, so we can create those using unpack().
      x: unpack(rows, 'advocate'),
      y: unpack(rows, 'inequality'),
      type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
      mode: 'markers+text', // possible modes: markers, markers+text, lines
      marker: { //marker object sets size and color for points
          size: 7,
          color: ["#213444","#213444","#213444","#213444","#213444","#213444","#213444","#213444","#213444","#213444","#213444","#213444","#F45B69","#213444","#213444","#F45B69","#F45B69","#213444","#213444","#213444","#213444","#F45B69","#213444","#213444","#213444","#213444","#213444","#213444","#213444"],
              },
      text: unpack(rows, 'Country'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point
      textposition: 'top center',

      name: 'Country'
    };




    /*** Now that we've created our data objects using our CSV, we just create the visualization as we've done before: ***/

    // Create the data object as an array of our data series objects:
    var data = [country];

    // The layout object provides options for how our visualization will appear:
    var layout = {
      showlegend: false,
      hovermode: true, // if false, disables the hover text for the entire plot
      xaxis: {
       title: 'Population of Active Women Who Advocate/Support Equal Opportunities For Women (%)'

      },
      yaxis: {
       title: 'Population of Women Who Believe There Is Gender Inequality (%)'
      },
      font: {
      family: 'Arial, sans-serif',
      size: 12,
      color: '#213444',
    }
    }

    var options = {
     displayModeBar: true, // disable zoom, save and other toolbar options.
    modeBarButtonsToRemove: [
          'sendDataToCloud',
          'pan',
          'pan2d',
          'autoScale2d',
          'lasso2d',
          'autoScale2d',
          'resetScale2d',
          'toggleSpikelines',
      ]
    }


    Plotly.newPlot('viz', data, layout, options);




  })

} 

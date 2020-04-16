// variable from data.js
var tableData = data;

// classify table body tag as variable
var tbody = d3.select("tbody")

// Append tbody with rows and respective cells from data.js
var fullTable = tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// define filtering function to filter by user input
function filterTable(userInput) {
    return tableData.filter(sighting => sighting.datetime === userInput)
};

// function for determining change in input field
function filterByInput(event) {
    // grab the value of the input field
    var newText = d3.select("#datetime").node().value;
    console.log(newText);
    // clear the existing table
    tbody.text("");

    // new variable for newly filtered table
    var newTable = filterTable(newText)

    // Set the output table to the filtered table
    newTable.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

d3.select("#filter-btn").on("click", filterByInput);




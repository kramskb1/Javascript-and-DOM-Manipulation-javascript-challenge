// from data.js
var tableData = data;
var tbody = d3.select("tbody");
function ufotable(data) {
    tbody.html("");
data.forEach((UFOData) => {
    var row = tbody.append("tr");
    Object.values(UFOData).forEach(( value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
}
ufotable(tableData);
function filterbutton() {
  var inputField = d3.select("#datetime").property("value");
  var filteredData= tableData.filter(row=>row.datetime===inputField);
  ufotable(filteredData);
}
d3.selectAll("#filter-btn").on("click", filterbutton);

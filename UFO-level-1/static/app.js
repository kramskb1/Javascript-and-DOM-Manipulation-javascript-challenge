// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// var button = d3.select("#filter-btn");
// var inputField1 = d3.select("#datetime");
// var inputField2 = d3.select("#city");
// var resetbtn = d3.select("#reset-btn");
// var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
function ufotable(data) {
    tbody.html("");
    // BONUS: Refactor to use Arrow Functions!
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

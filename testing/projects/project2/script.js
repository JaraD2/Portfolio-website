var table = document.querySelector("tbody");
const filesIndex = files.json;


function clearTable() {
  console.log(table);
  table.innerHTML = "";
}
i = 0;
while (i < filesIndex.length) {
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();
  cell1.innerHTML = filesIndex[i].name;
  cell2.innerHTML = filesIndex[i].size;
  cell3.innerHTML = filesIndex[i].date;
  i++;
}
function addRow() {
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();
  cell1.innerHTML = "New";
  cell2.innerHTML = "New";
  cell3.innerHTML = "New";
}
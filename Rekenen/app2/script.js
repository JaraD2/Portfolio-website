let global = {};

function start() {

  const tafelvan = document.getElementById("inputTafelvan").value;
  const tafelTot = document.getElementById("inputTafelTot").value;

  if (tafelvan == "" || tafelTot == "") {
    alert("Vul een tafel in");
    return;	
  }

  global.tafelvan = tafelvan;
  global.randomNumber = Math.floor(Math.random() * tafelTot) + 1;
  global.correctSolution = (global.randomNumber * tafelvan);

  const opgave = `${global.randomNumber}X${tafelvan}`;
  document.getElementById("Som").value = opgave;

}

function CheckSolution() {
  humanSolution = document.getElementById("InputField").value;

  if (humanSolution == "") {
    alert("Vul een antwoord in");
    return;
  }

  const elementToToggle = document.getElementById("history-card");
  elementToToggle.style.display = "block";


  const ol = document.querySelector("#History");
  const li = document.createElement("li");
  const text = document.createTextNode(
    `${global.randomNumber} x ${global.tafelvan} = ${humanSolution}`);


  li.classList.add("list-group-item");
  li.style.display = "block";
  li.appendChild(text);
  ol.appendChild(li);

  const last_item = document.querySelector("#History li:last-child");
  last_item.style.background =
    global.correctSolution == humanSolution ? "#00c220" : "#ff0000";
    start(); // Call the Reset function to reset input fields and global variables
}


// Add event listener to input field
const inputField = document.getElementById("InputField");
inputField.addEventListener("keydown", function(event) {
  if (event instanceof KeyboardEvent && event.key === "Enter") {
    CheckSolution();
    document.getElementById("InputField").value = "";
  }
});


// Add event listener to reset button
const resetButton = document.getElementById("oplossingCheck");
resetButton.addEventListener("click", function() {
  document.getElementById("InputField").value = "";
});



  
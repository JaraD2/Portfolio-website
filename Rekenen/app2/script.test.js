// Test case 1: Empty input
global.humanSolution = "";
CheckSolution(); // Expected output: alert("Vul een antwoord in");

// Test case 2: Incorrect solution
global.humanSolution = "24";
global.correctSolution = "42";
global.randomNumber = 6;
global.tafelvan = 7;
CheckSolution(); // Expected output: last_item.style.background = "#c20000";

// Test case 3: Correct solution
global.humanSolution = "42";
global.correctSolution = "42";
global.randomNumber = 6;
global.tafelvan = 7;
CheckSolution(); // Expected output: last_item.style.background = "#00c220";
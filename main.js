// Triangle Perimeter Calculator

// Button Event Listener
document.getElementById("btn").addEventListener("click", getUserInput);

// Main Event Function on Button Press
function getUserInput() {
    // Get User Input
    let x1 = +document.getElementById("x1").value;
    let x2 = +document.getElementById("x2").value;
    let x3 = +document.getElementById("x3").value;
    let y1 = +document.getElementById("y1").value;
    let y2 = +document.getElementById("y2").value;
    let y3 = +document.getElementById("y3").value;

    // Process Lengths of AB, AC, BC
    let AB = dist(x1, y1, x2, y2);
    let AC = dist(x1, y1, x3, y3);
    let BC = dist(x2, y2, x3, y3);

    displayResults(AB, AC, BC);
}

// Calculation Functions
function dist(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Display Results
function displayResults(AB, AC, BC) {
    document.getElementById("ABlength").innerHTML = AB;
    document.getElementById("AClength").innerHTML = AC;
    document.getElementById("BClength").innerHTML = BC;
    document.getElementById("perimeter").innerHTML = AB + AC + BC;
}
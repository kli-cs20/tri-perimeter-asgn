// Triangle Perimeter Calculator

// HTML Elements to display answers upon calculation
let AB = document.getElementById("ABlength");
let AC = document.getElementById("AClength");
let BC = document.getElementById("BClength");

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
    AB.innerHTML = dist(x1, y1, x2, y2);
    AC.innerHTML = dist(x1, y1, x3, y3);
    BC.innerHTML = dist(x2, y2, x3, y3);

    let perimeter = 0;
    document.getElementById("perimeter-ans").innerHTML = perimeter;
}

// Calculation Functions
function dist(x1, y1, x2, y2) {
    perimeter += Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
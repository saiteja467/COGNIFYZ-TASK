const button = document.getElementById("colorButton");
const colors = ["lightblue", "lightgreen", "lightcoral", "lightyellow", "lightpink"];
let lastColor = "lightblue";
button.addEventListener("click", function() {
    let newColor;
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === lastColor);

    button.style.backgroundColor = newColor;
    lastColor = newColor;
});

function displayGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
    if (hour >= 5 && hour < 12) {
        greeting = "Good morning! Have a great start to your day!";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good afternoon! Hope you're having a productive day!";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good evening! Time to relax and unwind!";
    } else {
        greeting = "Good night! Sweet dreams!";
    }
    alert(greeting);
}
window.onload = displayGreeting;


function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return; 
    }
    const sum = num1 + num2;
    document.getElementById("result").textContent = "Result: " + sum;
}


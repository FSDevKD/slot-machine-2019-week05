// Select the necessary elements
const totalElement = document.getElementById("total");
const resultElement = document.getElementById("result");
const betMinButton = document.getElementById("bet-min");
const betMaxButton = document.getElementById("bet-max");
const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");

// Set initial values
let total = 1000;
let bet = 1;
let result = "";

// Define the items for each reel
const items = ["🤨","🤩","🫥","😈","💀"];

// Define a function to spin the reels
function spin() {
  // Generate a random index for each reel's item
  const index1 = Math.floor(Math.random() * items.length);
  const index2 = Math.floor(Math.random() * items.length);
  const index3 = Math.floor(Math.random() * items.length);

  // Set the content of each reel to the corresponding item
  reel1.innerHTML = `<div class="item">${items[index1]}</div>`;
  reel2.innerHTML = `<div class="item">${items[index2]}</div>`;
  reel3.innerHTML = `<div class="item">${items[index3]}</div>`;

  // Check for a win
  if (index1 === index2 && index2 === index3) {
    result = "You won!";
    total += bet * 5;
  } else {
    result = "You lost!";
    total -= bet;
  }

  // Update the display
  totalElement.textContent = `Total: ${total}`;
  resultElement.textContent = result;
}

// Add click event listeners to the bet buttons
betMinButton.addEventListener("click", function() {
  bet = 10;
});
betMaxButton.addEventListener("click", function() {
  bet = 50;
});

// Add click event listener to the spin button
document.getElementById("spin").addEventListener("click", function() {
  if (total < bet) {
    result = "You don't have enough money to bet!";
    resultElement.textContent = result;
  } else {
    spin();
  }
});

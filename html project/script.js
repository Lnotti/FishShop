const fishList = [
    { name: "arrowana", price: 1400 },
    { name: "Discus", price: 125 },
    { name: "Dwarf chicilid", price: 120 },
    { name: "Tobypufferfish", price: 55 },
    { name: "Beta", price: 35 },
    { name: "butterflyFish", price: 30 },
    { name: "oscar", price: 21 },
    { name: "catfish", price: 20 },
    { name: "angelfish", price: 15 },
    { name: "gourami", price: 10 }
];

let money = 500;

function buyFish() {
    const fishIndex = Array.from(this.parentNode.parentNode.children).indexOf(this.parentNode);
    const selectedFish = fishList[fishIndex];

    if (money >= selectedFish.price) {
        money -= selectedFish.price;
        updateMoneyDisplay();
        displayResult(`You bought a ${selectedFish.name} for $${selectedFish.price}.`);
        this.parentNode.classList.add('sold-out');
        this.removeEventListener('click', buyFish);
    } else {
        displayResult("You don't have enough money to buy this fish.");
    }
}

function updateMoneyDisplay() {
    const moneyDisplay = document.getElementById('moneyDisplay');
    moneyDisplay.textContent = money;
}

function displayResult(message) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.textContent = message;
}

const checkFishBtn = document.getElementById('checkFishBtn');
checkFishBtn.addEventListener('click', () => {
    let availableFishCount = 0;
    const fishElements = document.getElementsByClassName('fish');

    Array.from(fishElements).forEach((fishElement, index) => {
        const fish = fishList[index];
        if (!fishElement.classList.contains('sold-out')) {
            fishElement.querySelector('img').style.border = '2px solid green';
            availableFishCount++;
        } else {
            fishElement.querySelector('img').style.border = 'none';
        }
    });

    if (availableFishCount === 0) {
        displayResult('All fish are sold out.');
    } else {
        displayResult(`There are ${availableFishCount} fish available for purchase.`);
    }
});

updateMoneyDisplay();
// Get the cartoon fish element
const cartoonFish = document.getElementById('cartoonFish');

// Get the width and height of the window
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// Calculate the maximum X and Y positions for the fish
const maxX = windowWidth - cartoonFish.width;
const maxY = windowHeight - cartoonFish.height;

// Function to get a random position within the window
function getRandomPosition() {
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    return { x: randomX, y: randomY };
}

// Function to move the fish to a random position
function moveFish() {
    const position = getRandomPosition();
    cartoonFish.style.left = position.x + 'px';
    cartoonFish.style.top = position.y + 'px';
}

// Move the fish initially
moveFish();

// Move the fish every 3 seconds
setInterval(moveFish, 3000);

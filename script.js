// Select elements from the DOM
const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const diceButton = document.getElementById('dice-button');

// Fetch advice from API and update the DOM
function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const { id, advice } = data.slip;
            adviceId.textContent = `Advice #${id}`;
            adviceText.textContent = `"${advice}"`;
        })
        .catch(error => {
            adviceText.textContent = "Oops! Unable to fetch advice.";
        });
}

// Add click event listener to the dice button
diceButton.addEventListener('click', fetchAdvice);

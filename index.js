// Score variables
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

// Select elements
const buttons = document.querySelectorAll("button");
const resultText = document.getElementById("result");
const choicesText = document.getElementById("choices");

// Event listeners for buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        playGame(playerChoice);
    });
});

function playGame(playerChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result;

    if (playerChoice === computerChoice) {
        result = "It's a Tie Bruh!";
        drawScore++;
    } 
    else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "Gratsiee!";
        playerScore++;
        launchConfetti();
    } 
    else {
        result = "Better Luck Next Time!";
        computerScore++;
    }

    // Update UI
    choicesText.textContent = `You chose ${playerChoice} | Computer chose ${computerChoice}`;
    resultText.textContent = result;

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("drawScore").textContent = drawScore;
}

function launchConfetti() {
    confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
    });
}
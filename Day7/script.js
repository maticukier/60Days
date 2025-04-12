const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDiv = document.getElementById('result');
const userScoreSpan = document.getElementById('userScore');
const computerScoreSpan = document.getElementById('computerScore');
const resetBtn = document.getElementById('reset');

let userScore = 0;
let computerScore = 0;

function computerChoice() {
    const choices = ['✊', '✋', '✌️'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    if (
        (userChoice === '✊' && computerChoice === '✌️') ||
        (userChoice === '✋' && computerChoice === '✊') ||
        (userChoice === '✌️' && computerChoice === '✋')
    ) {
        userScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'You lose!';
    }
}

function updateUI(userChoice, compChoice, result) {
    resultDiv.textContent = `You chose ${userChoice}, computer chose ${compChoice}. ${result}`;
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;

    resultDiv.classList.add('highlight');
    setTimeout(() => {
        resultDiv.classList.remove('highlight');
    }, 1000);
}

rockBtn.addEventListener('click', () => playGame('✊'));
paperBtn.addEventListener('click', () => playGame('✋'));
scissorsBtn.addEventListener('click', () => playGame('✌️'));

function playGame(userChoice) {
    const compChoice = computerChoice();
    const result = determineWinner(userChoice, compChoice);
    updateUI(userChoice, compChoice, result);
}

resetBtn.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
    resultDiv.textContent = 'Choose an option to start playing!';
});
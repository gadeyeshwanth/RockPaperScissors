let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const user = document.querySelector('#user-score');
const computer = document.querySelector('#computer-score');

const generateComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    msg.innerText = "It's a draw! Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWins, userChoice, computerChoice) => {
    if (userWins) {
        msg.innerText = "You Win! " + userChoice + " beats " + computerChoice;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        userScore++;
        user.innerText = userScore;
    } else {
        computerScore++;
        computer.innerText = computerScore;
        msg.innerText = "You Lose! " + computerChoice + " beats " + userChoice;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }

}

const playGame = (userChoice) => {
    const computerChoice = generateComputerChoice();

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWins = true;
        if (userChoice === 'rock') {
            userWins = computerChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWins = computerChoice === 'scissors' ? false : true;
        } else {
            userWins = computerChoice === 'rock' ? false : true;
        }
        showWinner(userWins, userChoice, computerChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click',() => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})
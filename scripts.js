function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    let choiceSymbol = '';
    switch (computerChoice) {
        case 0:
        choiceSymbol = 'Rock'
        break;
        case 1:
        choiceSymbol = 'Paper'
        break;
        case 2:
        choiceSymbol = 'Scissors'    
    };
return choiceSymbol;
};

function playRound() {
    let playerSelection = prompt("Please type Rock, Paper, or Scissors.");
    let computerSelection = getComputerChoice();
    let playerChoice = playerSelection.toUpperCase();
    switch (playerChoice) {
        case 'ROCK':
            switch (computerSelection) {
                case 'Rock':
                return "It's a tie.";
                case 'Paper':
                return "You lose.";
                case 'Scissors':
                return "You win!";
            }
        case 'PAPER':
            switch (computerSelection) {
                case 'Rock':
                return "You win!";
                case 'Paper':
                return "It's a tie.";
                case 'Scissors':
                return "You lose.";
                };
        case 'SCISSORS':
            switch (computerSelection) {
                case 'Rock':
                return "You lose.";
                case 'Paper':
                return "You Win!";
                case 'Scissors':
                return "It's a tie.";
                };
    }
}

function playGame(){
    let gameNum = 1;
    let playerScore = 0;
    let computerScore = 0;
    let result = ''

    while (gameNum <= 5) {
        result = playRound();
        if (result == "You win!") {
            playerScore++
            gameNum++
        } else if (result == "You lose.") {
            computerScore++
            gameNum++
        } else if (result == "It's a tie.") {
            gameNum++
        }
    };
    return `` 
}
    
}
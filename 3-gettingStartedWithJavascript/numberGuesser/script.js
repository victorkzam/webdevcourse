let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * (9 - 0));
};

const compareGuesses = (user, computer, target) => {
    // Compares relative distance between the guess and the target
    let userGuess = Math.abs(target, user);
    let computerGuess = Math.abs(target, computer);
    return userGuess <= computerGuess;
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
};
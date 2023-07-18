// Create a function to generate a random number from one to six
function diceRoll() {
    randomNum = Math.ceil(Math.random() * 6); //Random number from 1-6
    return randomNum;
}

function checkWinner(num1, num2) {
    if (num1 > num2) {
        return '🚩 Player 1 Wins!'
    }
    else if (num1 < num2) {
        return 'Player 2 Wins! 🚩'
    }
    return '🚩 Tie! 🚩'
}

var randomNumber1 = diceRoll();
var randomNumber2 = diceRoll();


// Change the heading text to display the winner of the dice toss. 
document.querySelector('h1').textContent = checkWinner(randomNumber1, randomNumber2);

// Change the dice image based on random number using dom manipulation.
document.querySelector(".img1").setAttribute('src', './images/dice' + randomNumber1 + '.png')
document.querySelector(".img2").setAttribute('src', './images/dice' + randomNumber2 + '.png')

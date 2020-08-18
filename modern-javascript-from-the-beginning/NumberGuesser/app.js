// Game values
let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;

// UI Elements
const game = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.getElementById('guess-btn');
const guessInput = document.getElementById('guess-input');
const message = document.querySelector('.message');

// Assign UI min and Max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event Listener
game.addEventListener('mousedown', function(e){
    if(e.target.className == 'play-again'){
        window.location.reload();
    }
});

// listen for guess
guessBtn.addEventListener('click', function(){
    let guess = (parseInt(guessInput.value));
    console.log(guess);

    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum){
        gameOver(true,  `${winningNum} is correct, YOU WON!`);

    } else {
        // Wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0){
            // Game over  - lost
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);

        } else {
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            // Game continue - answer wrong
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }

});

// Game Over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;

    // Change border color
    guessInput.style.borderColor = color;
    message.style.color = color;

    // Set message
    setMessage(msg);

    // Play Again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max){
    Math.floor((Math.random() * (max - min + 1) + min));
    
}

// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
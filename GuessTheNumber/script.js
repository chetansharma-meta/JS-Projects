const randomNum = Math.floor(Math.random() * 100 + 1);
// const randomNum = 10;

const input = document.getElementById('guessField')
const submit = document.getElementById('submit')
const preGuess = document.querySelector('.lastResult')


let numGuess = 1
submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    console.log(guess);
    validateGuess(guess);
})

function validateGuess(guess) {
    if (isNaN(guess)) {
        displayMessage(`Enter number to Start`)
    } else if (guess < 0 || guess > 100) {
        displayMessage(`Enter a Number btw 1 to 100`);
    } else {
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        alert(`Your guess: ${guess} is correct!!`)
        console.log(guess);
        console.log(`You are correct!!`);
        if (confirm(`Do you want to play again?`)){
            numGuess=1
            preGuess.innerHTML = 10 
            input.innerHTML = " "
        }
    } else if (guess !== randomNum) {
        if(numGuess == 11){
            displayMessage(`You have used all guesses`)
            
        } else{
            preGuess.innerHTML = 10 - numGuess
            numGuess++;
            displayMessage('oops!! Your gusess is incorrect')
        }
    }

}

function displayMessage(guess) {
    console.log(guess);
    alert(guess);
}

function endGame() {

}
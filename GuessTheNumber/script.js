const randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.getElementById('submit')
const userInput = document.getElementById('guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess  = parseInt(userInput.value);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid Number')
    } else if(guess < 1){
        alert('Please enter a valid number')
    } else if(guess > 100) {
        alert('Please enter a number less than 100')
    } else{
        prevGuess.push(guess)
        if(numGuesses === 11 ){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            EndGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess=== randomNumber){
        displayMessage(`you guessed right`)
        EndGame()
    } else if (guess<randomNumber){
        displayMessage(`Number is TOO low`)
    } else if (guess>randomNumber){
        displayMessage(`Number is TOO high`)
    }

}

function displayGuess(guess){

}

function displayMessage(message){

}

function EndGame(){

}

function newGame(){

}
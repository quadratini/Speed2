let wordBank = ['hello', 'test', 'yeah', 'banana', 'grape', 'orange', 'cat']

const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const answerLabel = document.getElementById('answerLabel')
const scoreCount = document.getElementById('score')
const buttons = [button1, button2, button3]

// instantiate buttons
button1.innerHTML = getRandomWord()
button2.innerHTML = getRandomWord()
button3.innerHTML = getRandomWord()

let score = 0
scoreCount.innerHTML = score

let randomValue = getRandomNumber(0, 3)
setButtonToAnswer(randomValue)

// add listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {
        gameLoop(button)
    })
})

function setButtonToAnswer(randomValue) {
    if (randomValue === 0) {
        answerLabel.innerHTML = button1.innerHTML
    } else if (randomValue === 1) {
        answerLabel.innerHTML = button2.innerHTML
    } else {
        answerLabel.innerHTML = button3.innerHTML
    }
}

// Removes and returns a random word (problems if not enough words in bank and called)
function getRandomWord() {
    const randomIndex = getRandomNumber(0, wordBank.length)
    const randomWord = wordBank.splice(randomIndex, 1)
    return randomWord
}

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * max + min)
    return randomNumber
}

function resetWordBank() {
    wordBank = ['hello', 'test', 'yeah', 'banana', 'grape', 'orange', 'cat']
}

function gameLoop(button) {
    if (answerLabel.innerHTML === button.innerHTML) {
        button1.innerHTML = getRandomWord()
        button2.innerHTML = getRandomWord()
        button3.innerHTML = getRandomWord()
        randomValue = getRandomNumber(0, 3)
        setButtonToAnswer(randomValue)
        scoreCount.innerHTML = ++score
        resetWordBank()
    } else {
        answerLabel.innerHTML = 'Game Over'
        buttons.forEach(button => {
            button.disabled = true
        })
    }
}

const wordBank = ['hello', 'test', '1', 'banana', 'grape', 'orange', 'cat']

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const answerLabel = document.getElementById("answerLabel")
const scoreCount = document.getElementById("score")

// note: can create an array of buttons, then loop through them. Do this after initial version

// instantiate buttons
button1.innerHTML = getRandomWord()
button2.innerHTML = getRandomWord()
button3.innerHTML = getRandomWord()

let score = 0
scoreCount.innerHTML = score

let randomValue = getRandomNumber(0, 3)
setButtonToAnswer(randomValue)

// add listeners
button1.addEventListener("click", () => {
    if (answerLabel.innerHTML === button1.innerHTML) {
        button1.innerHTML = getRandomWord()
        button2.innerHTML = getRandomWord()
        button3.innerHTML = getRandomWord()
        randomValue = getRandomNumber(0, 3)
        setButtonToAnswer(randomValue)
        scoreCount.innerHTML = ++score
    }
})
button2.addEventListener("click", () => {
    if (answerLabel.innerHTML === button2.innerHTML) {
        button1.innerHTML = getRandomWord()
        button2.innerHTML = getRandomWord()
        button3.innerHTML = getRandomWord()
        randomValue = getRandomNumber(0, 3)
        setButtonToAnswer(randomValue)
        scoreCount.innerHTML = ++score
    }
})
button3.addEventListener("click", () => {
    if (answerLabel.innerHTML === button3.innerHTML) {
        button1.innerHTML = getRandomWord()
        button2.innerHTML = getRandomWord()
        button3.innerHTML = getRandomWord()
        randomValue = getRandomNumber(0, 3)
        setButtonToAnswer(randomValue)
        scoreCount.innerHTML = ++score
    }
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

function getRandomWord() {
    const randomNumber = getRandomNumber(0, wordBank.length)
    const randomWord = wordBank[randomNumber]
    return randomWord
}

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * max + min)
    return randomNumber
}


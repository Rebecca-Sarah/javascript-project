import {
    myQuestions
} from './questions.js';
const startBtn = document.getElementById("start");
const infoBox = document.getElementById("info-box");
const continueBtn = document.getElementById("continue-button");
const characters = document.getElementById("characters");
const pheobeBtn = document.getElementById("pheobe-btn");
const joeyBtn = document.getElementById("joey-btn");
const rachelBtn = document.getElementById("rachel-btn");
const rossBtn = document.getElementById("ross-btn");
const monicaBtn = document.getElementById("monica-btn");
const chandlerBtn = document.getElementById("chandler-btn");
const quizElement = document.getElementById("quiz");
// const optionButtons = document.getElementById("option-buttons");
// const next = document.getElementById("next-btn");
// const questionElement = document.getElementById("question");
const resultsElement = document.getElementById("results");
const mainQuestion = document.getElementById("main-question");
const answer1 = document.getElementById("answer1-btn");
const answer2 = document.getElementById("answer2-btn");
const answer3 = document.getElementById("answer3-btn");
const answer4 = document.getElementById("answer4-btn");
const replayBtn = document.getElementById("replay");

// let currentQuestionCategory = "";
// let currentQuestionIndex = 0;
let index = 0;
let currentQuestions;

startBtn.addEventListener("click", ruleElement);
continueBtn.addEventListener("click", chooseCategory);
pheobeBtn.addEventListener("click", () => {
    quiz("pheobeQuestions");
});
joeyBtn.addEventListener("click", () => {
    quiz("joeyQuestions");
});
rachelBtn.addEventListener("click", () => {
    quiz("rachelQuestions");
});
rossBtn.addEventListener("click", () => {
    quiz("rossQuestions");
});
monicaBtn.addEventListener("click", () => {
    quiz("monicaQuestions");
});
chandlerBtn.addEventListener("click", () => {
    quiz("chandlerQuestions");
});

answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);

function ruleElement() {
    startBtn.classList.add("hide");
    infoBox.classList.remove("hide");
}

function chooseCategory() {
    infoBox.classList.add("hide");
    characters.classList.remove("hide");
}

function quiz(choice) {
    characters.classList.add("hide");
    quizElement.classList.remove("hide");

    // our current questions
    currentQuestions = myQuestions[choice];
    displayQuestion();
}

function displayQuestion() {
    mainQuestion.innerHTML = currentQuestions[index].question;
    answer1.innerHTML = currentQuestions[index].answers.a;
    answer2.innerHTML = currentQuestions[index].answers.b;
    answer3.innerHTML = currentQuestions[index].answers.c;
    answer4.innerHTML = currentQuestions[index].answers.d;
}

function checkAnswer(event) {
    // let scoreText = document.getElementById("scoreText");
    // var score = 0;
    // scoreText.innerText = `Score: ${score}`
    // let answerChosen = event.target.innerHTML;

    // check answer here
    let answerChosen = parseInt(document.getElementById("answer-section").value)
    if (answerChosen === currentQuestions[index].correctAnswer[0]) {
        incrementScore();
    }

    // increase index number
    index++;

    // check if game is over
    if (index === 4) result();

    // call displayQuestion again
    else displayQuestion();
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

// function nextQuestion(event) {
//     currentQuestionIndex++;
//     if (currentQuestionIndex <= 3) {
//         const currentQuestion = myQuestions[currentQuestionCategory][currentQuestionIndex].question;
//         questionElement.innerHTML = currentQuestion;
//     } else if (currentQuestionIndex >= 3) {
//         next.addEventListener("click", result);
//     }
// }


function result() {
    quizElement.classList.add("hide");
    resultsElement.classList.remove("hide");
    resultsElement.style.display = "block";
    let score = incrementScore();
    let resultText = document.getElementById("result-text");
    resultText.innerText = `Congratualtions! You have answered all the questions! You scored
    ${score}!`;
}

replayBtn.addEventListener("click", quizRestart);

function quizRestart() {
    resultsElement.classList.add("hide");
    resultsElement.style.display = "none";
    ruleElement();
}
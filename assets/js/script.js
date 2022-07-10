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
const characterHeading = document.getElementById("heading");
const optionButtons = document.getElementById("option-buttons");
const next = document.getElementById("next-btn");
const questionElement = document.getElementById("question");
const submitBtn = document.getElementById("submit-btn");
const resultsElement = document.getElementById("results");
const mainQuestion = document.getElementById("main-question");
const answer1 = document.getElementById("answer1-btn");
const answer2 = document.getElementById("answer2-btn");
const answer3 = document.getElementById("answer3-btn");
const answer4 = document.getElementById("answer4-btn");
const replayBtn = document.getElementById("replay");

let currentQuestionCategory = "";
let currentQuestionIndex = 0;
let currentAnswerCategory = "";
var score = 0;
let timer;
let timeLeft;
let quizLength = 3;
let index = 0;
let currentQuestions;

startBtn.addEventListener("click", ruleElement);
continueBtn.addEventListener("click", chooseCategory)
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
    answer1.innerHTML = currentQuestions[index].answers["a"];
    answer2.innerHTML = currentQuestions[index].answers["b"];
    answer3.innerHTML = currentQuestions[index].answers["c"];
    answer4.innerHTML = currentQuestions[index].answers["d"];
}

function startTimer(time) {

}

function checkAnswer(event) {
    let answerChosen = event.target.innerHTML;

    // check answer here
    if (answerChosen === currentQuestions[index].correctAnswer) {
        score++;
    }

    // increase index number
    index++;

    // check if game is over
    if (index === 4) result();

    // call displayQuestion again
    else displayQuestion();
}

// function quiz(questionCategory) {
//     infoBox.classList.add("hide");
//     characters.classList.remove("hide");
//     quizElement.classList.remove("hide");
//     currentQuestionCategory = questionCategory;
//     const currentQuestion = myQuestions[currentQuestionCategory][0].question;
//     console.log(currentQuestion);
//     mainQuestion.innerHTML = currentQuestion;
//     currentAnswerCategory = questionCategory;
//     const currentAnswers = myQuestions[currentAnswerCategory][0].answers;
//     answer1.innerHTML = currentAnswers["a"];
//     answer2.innerHTML = currentAnswers["b"];
//     answer3.innerHTML = currentAnswers["c"];
//     answer4.innerHTML = currentAnswers["d"];
//     if (output.value === myQuestions.correctAnswer) {
//         score++;
//     }
//     setTimeout(function () {
//         difficultyGameArea.classList.add("hide");
//         questionGameArea.classList.remove("hide");
//         result();
//         startTimer();
//     }, 2000);
// }

function nextQuestion(event) {
    currentQuestionIndex++;
    // gameTimer.innerHTML = 20;
    // startTimer();
    if (currentQuestionIndex <= 3) {
        const currentQuestion = myQuestions[currentQuestionCategory][currentQuestionIndex].question;
        questionElement.innerHTML = currentQuestion;
    } else if (currentQuestionIndex >= 3) {
        next.addEventListener("click", result);
    }
}


function result() {
    quizElement.classList.add("hide");
    resultsElement.classList.remove("hide");
    resultsElement.style.display = "block";

}
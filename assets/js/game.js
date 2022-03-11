//https://opentdb.com/api.php?amount=10&category=20&type=multiple

//---------------------Variables-------------------------
let play = document.getElementById("play-button");
const question = document.getElementById("question-area");
const option = document.querySelector(".option");
const _score = document.getElementById("score");
const _questionsTotal = document.getElementById("questions-total");
let correctAnswer = "", score = questionsAsked = 0, questionsTotal = 5;



//let unusedQuestions = [];

//---------------------Event Listeners-------------------------


document.addEventListener("DOMContentLoaded", () => {
    fetchQuestion();
    _questionsTotal.textContent = questionsTotal;
    _score.textContent = score;
})

//--------------------------Functions--------------------
function startGame() {

    questionCount = 0;
    
}

//An asynchronous funtion to fetch data from the API
async function fetchQuestion() {
    const APIUrl = "https://opentdb.com/api.php?amount=1&category=20&type=multiple";
    const result = await fetch(`${APIUrl}`);
    const data = await result.json();
    displayQuestion(data.results[0]);
}

//Taking API data and formatting it to display a question and answers
function displayQuestion(data) {
    correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;

    //create a new array containing random incorrect and correct answers
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    
    question.innerHTML = `${data.question}`;
    option.innerHTML = `
    ${optionsList.map((option, index) => `
    <li>${index + 1}. <span> ${option} </span></li>`).join("")}
    `;
    pickOption();
}

function pickOption() {
    option.querySelectorAll("li").forEach((options) => {
        options.addEventListener("click", () => {
            if(option.querySelector(".selected")){
                const activeOption = option.querySelector(".selected");
                activeOption.classList.remove('selected');
            }
            options.classList.add("selected");
        })
    })
}

function checkCorrectAnswer() {

}

function incrementScore() {

}

function incrementQuestionCount() {

}

function changeSelectedAnswerToRed() {

}

function changeSelectedAnswerToGreen() {

}

function updateProgressBar() {

}
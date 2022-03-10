//https://opentdb.com/api.php?amount=10&category=20&type=multiple

//---------------------Variables-------------------------
const question = document.getElementById("question-area");
let correctAnswer = "", correctAnswerCount = questionCount = 0, numberOfQuestions = 5;
const option = document.querySelector(".option");
console.log(option);

let unusedQuestions = [];

//---------------------Event Listeners-------------------------
let play = document.getElementById("play-button");
//--------------------------Functions--------------------
function startGame() {

    questionCount = 0;
    
}

//An asynchronous funtion to fetch data from the API
async function fetchQuestion() {
    const APIUrl = "https://opentdb.com/api.php?amount=1&category=20&type=multiple";
    const result = await fetch(`${APIUrl}`);
    const data = await result.json();
    //console.log(data.results);
    displayQuestion(data.results[0]);
}

function displayQuestion(data) {
    correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;

    //create a new array containing random incorrect answers and then correct answer is added
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    
    question.innerHTML = `${data.question}`;
    option.innerHTML = `
    ${optionsList.map((option, index) => `
    <li>${index + 1}. <span> ${option} </span></li>`).join("")}
    `;

    
}
fetchQuestion();
displayQuestion();

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
//https://opentdb.com/api.php?amount=10&category=20&type=multiple

//An asynchronous funtion to fetch data from the API
async function loadQuestion() {
    const APIUrl = "https://opentdb.com/api.php?amount=1&category=20&type=multiple";
    const result = await fetch(`${APIUrl}`);
    const data = await result.json();
    console.log(data.results);
}

loadQuestion();


//---------------------Event Listeners-------------------------
let play = document.getElementById("play-button");

//---------------------Variables-------------------------
const question = document.getElementById("question-area");
const option = Array.from(document.getElementsByClassName("option"));
console.log(option);
let questionCount = 0;
let correctAnswerCount = 0;
let unusedQuestions = [];
//let aButton = document.getElementById("a-button");
//let bButton = document.getElementById("b-button");
//let cButton = document.getElementById("c-button");
//let dButton = document.getElementById("d-button");


//--------------------------Functions--------------------
function startGame() {

    questionCount = 0;
    
}

function displayQuestion() {
    
}

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
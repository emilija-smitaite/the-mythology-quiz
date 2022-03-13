//https://opentdb.com/api.php?amount=10&category=20&type=multiple

/* Script was created using the following tutorial:
https://www.youtube.com/watch?v=-cX5jnQgqSM
I have added some event listeners on my own, added my own styling, 
adapted some of the functions.
*/
//---------------------Variables-------------------------
let play = document.getElementById("play-button");
const question = document.getElementById("question-area");
const option = document.querySelector(".option");
const scoreArea = document.getElementById("score");
const questionsTotalArea = document.getElementById("questions-total");
const checkAnswerButton = document.getElementById("check-answer-button");
const playAgainButton = document.getElementById("play-again-button");
const outcome = document.getElementById("outcome");

let correctAnswer = "", score = questionsAsked = 0, questionsTotal = 5;



//let unusedQuestions = [];

//---------------------Event Listeners-------------------------


document.addEventListener("DOMContentLoaded", () => {
    fetchQuestion();
    eventListeners();
    questionsTotalArea.textContent = questionsTotal;
    scoreArea.textContent = score;
});

function eventListeners() {
    checkAnswerButton.addEventListener("click", checkCorrectAnswer);
}


//--------------------------Functions--------------------

//An asynchronous funtion to fetch data from the API
async function fetchQuestion() {
    const APIUrl = "https://opentdb.com/api.php?amount=1&category=20&type=multiple";
    const result = await fetch(`${APIUrl}`);
    const data = await result.json();
    outcome.innerHTML = "";
    displayQuestion(data.results[0]);
}

//Taking API data and formatting it to display a question and answers
function displayQuestion(data) {
    checkAnswerButton.disabled = false;
    correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;

    //create a new array containing random incorrect and correct answers
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    
    question.innerHTML = `${data.question}`;
    option.innerHTML = `
    ${optionsList.map((option, index) => `
    <li>${index + 1}. <span>${option}</span></li>`).join("")}
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
    checkAnswerButton.disabled = true;
    if(option.querySelector(".selected")){
        let pickedAnswer = option.querySelector(".selected span").textContent;
        if(pickedAnswer == correctAnswer){
            score++;
            outcome.innerHTML = `<p><i class = "fas fa-check"></i>Correct Answer!</p>`;
        } else {
            outcome.innerHTML = `<p><i class = "fas fa-times"></i>Incorrect Answer! <p></p><small><b>Correct answer: </b>${correctAnswer}</small></p>`;
        }
        incrementQuestionCount();
    } 
}

function incrementQuestionCount() {
    questionsAsked++;
    editQuestionCount();
    if(questionsAsked == questionsTotal) {
        checkAnswerButton.style.display = "none";
        outcome.innerHTML += `<p>Your score is ${score}/${questionsTotal}!</p>`
    } else {
        setTimeout(() => {
            fetchQuestion();
        }, 300);
    }
}

function editQuestionCount() {
    questionsTotalArea.textContent = questionsTotal;
    scoreArea.textContent = score;
}





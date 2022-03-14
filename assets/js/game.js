/* https://opentdb.com/api.php?amount=10&category=20&type=multiple
Generated API link */

/* Script was created using the following tutorial:
https://www.youtube.com/watch?v=-cX5jnQgqSM
I have added some event listeners on my own, 
adapted some of the functions,  added my own styling, 
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

let correctAnswer = "",
  score = (questionsAsked = 0),
  questionsTotal = 5;

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
  playAgainButton.addEventListener("click", playAgain);
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

  //Return random array of answer options
  optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);

  question.innerHTML = `${data.question}`;

  //Iterate answer options and place into <li> elements with index prefix
  option.innerHTML = `
    ${optionsList
      .map(
        (option, index) => `
    <li>${index + 1}. <span>${option}</span></li>`
      )
      .join("")}
    `;
  pickOption();
}

//Highlight only the answer option clicked on
function pickOption() {
  option.querySelectorAll("li").forEach((options) => {
    options.addEventListener("click", () => {
      if (option.querySelector(".selected")) {
        const activeOption = option.querySelector(".selected");
        activeOption.classList.remove("selected");
      }
      options.classList.add("selected");
    });
  });
}

/*On clicking CHECK ANSWER button check whether answer is correct, increment CORRECT score,
give user feedback, stop next question being displayed on click without answer selected */
function checkCorrectAnswer() {
  checkAnswerButton.disabled = true;
  if (option.querySelector(".selected")) {
    let pickedAnswer = option.querySelector(".selected span").textContent;
    if (pickedAnswer == correctAnswer) {
      score++;
      outcome.innerHTML = `<p><i class = "fas fa-check"></i>Correct Answer!</p>`;
    } else {
      outcome.innerHTML = `<p><i class = "fas fa-times"></i>Incorrect Answer! <p></p><small><b>Correct answer: </b>${correctAnswer}</small></p>`;
    }
    incrementQuestionCount();
  } 
   //Handle user clicking CHECK ANSWER button - keep it active until answer is selected
  else {
    outcome.innerHTML = `<p><i class = "fas fa-question"></i>Select your answer!</p>`;
    checkAnswerButton.disabled = false;
  }
}

//Increment asked questions count, stop once max number is reached. Provide user feedback on quiz result.
function incrementQuestionCount() {
  questionsAsked++;
  editQuestionCount();
  if (questionsAsked == questionsTotal) {
    checkAnswerButton.style.display = "none";
    playAgainButton.style.display = "block";
    outcome.innerHTML += `<p>Your score is ${score}/${questionsTotal}!</p>`;
  } else {
    
    // Delay for better UX
    setTimeout(() => {
      fetchQuestion();
    }, 300);
  }
}

//Update relevant DOM elements
function editQuestionCount() {
  questionsTotalArea.textContent = questionsTotal;
  scoreArea.textContent = score;
}
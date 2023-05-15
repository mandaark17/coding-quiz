// Questions/Answers 
var questions = [
{// Question 1
    question: "Which is NOT a JS variable type?",
    answers: [
        {text: "Boolean", correct: false},
        {text: "Java", correct: true},
        {text: "String", correct: false},
        {text: "Number", correct: false},
    ]
},
{// Question 2
    question: "Which method returns the length of the string?",
    answers: [
        {text: "length()", correct: true},
        {text: "size()", correct: false},
        {text: "index()", correct: false},
        {text: "None of the Above", correct: false},
    ]
},
{// Question 3
    question: "What is correct function syntax?",
    answers: [
        {text: "function: myFunction()", correct: false},
        {text: "function = myFunction()", correct: false},
        {text: "function myFunction()", correct: true},
        {text: "myFunction():function", correct: false},
    ]
},
{// Question 4
    question: "How does a for loop start?",
    answers: [
        {text: "for (i=0; i<=5)", correct: false},
        {text: "for (i=0; i<=5; i++)", correct: true},
        {text: "for (i=1 to 5)", correct: false},
        {text: "for (i<=5; i++)", correct: false},
    ]
},
];

// Global element variables
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var continueEl = document.getElementById("continue");
var scoreAreaEl = document.querySelector('#scoreArea');
var inNameEl = document.querySelector('#inName');
var buttonDivEl = document.querySelector('#saveButton');
var highScoreEl = document.querySelector('#highScores');
var scorePageEl = document.querySelector('#score');

// Global number variables
var sec = 15;
var questionsIndex = 0;
var score = 0;

// Global local storage functions
var savedScore = function() {
    localStorage.setItem("score", JSON.stringify(score));
}
var savedInit = function(initials) {
    localStorage.setItem("initials", JSON.stringify(initials));
}

// Set starting index/score to null, run
function startQuiz(){
    questionsIndex = 0;
    score = 0;
    continueEl.innerHTML = "Continue";
    showQuestion();
}

// Show each new question
function showQuestion(){
    resetText();
    var currentQuestion = questions[questionsIndex];
    var questionNum = questionsIndex + 1;
    questionEl.innerHTML = questionNum + ". " + currentQuestion.question;
    
    // Display different answers
    currentQuestion.answers.forEach(answers => {
        var button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answersEl.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Remove previous answer/continue buttons
function resetText(){
    continueEl.style.display = "none";
    while(answersEl.firstChild){
        answersEl.removeChild(answersEl.firstChild);
    }
}

// Show correct or incorrect with color
function selectAnswer(e){
    var selectedBtn = e.target;
    var isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
        sec = sec - 5;
    }
    continueEl.style.display = "block";
}

// Countdown timer
function timer(){
    var timer = setInterval(function(){
        document.getElementById("timerDisplay").innerHTML= sec+ " seconds!";
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            showScore();
        }
    }, 1000);
}

// Final text replacement
function showScore(){
    resetText();
    questionEl.innerHTML = `You scored ${score} out of 4!`;
    continueEl.innerHTML = "Try Again?";
    continueEl.style.display = "block";
    initTextEl = document.createElement("input"); 
    initTextEl.setAttribute("id", "initials-input"); 
    initTextEl.setAttribute("type", "text"); 
    initTextEl.setAttribute("name", "initials"); 
    initTextEl.setAttribute("placeholder", "Enter Initials here"); 
    inNameEl.appendChild(initTextEl);

    // Create save button element
    saveButtonEl = document.createElement("button");
    saveButtonEl.setAttribute("id", "save-btn");
    saveButtonEl.setAttribute("class","save-btn");
    saveButtonEl.setAttribute("type", "submit");
    saveButtonEl.textContent = "Save Score";

    inNameEl.appendChild(saveButtonEl);
    inNameEl.addEventListener("submit", viewHighScores);
}
// Save scores to local storage
function viewHighScores (e) { 
    e.preventDefault();
      var name = document.querySelector("#initials-input").value;
      savedInit(name);
      
      scorePageEl.replaceWith(highScoreEl);
      loadSaveScores();
}

// Gets tasks from local storage and load them
function loadSaveScores() {
    var savedScore = localStorage.getItem("score");
    var savedInit = localStorage.getItem("initials");
    savedScore  = JSON.parse(savedScore);
    savedInit = JSON.parse(savedInit);
    document.getElementById("highScores").innerHTML = savedInit + " - " + savedScore;
}

// Determines place in quiz
function nextButton(){
    questionsIndex++;
    if(questionsIndex < questions.length){
        showQuestion();
    }
    else {
        showScore();
    }
}

// Retake quiz if desired
continueEl.addEventListener("click", ()=> {
    if(questionsIndex < questions.length){
        nextButton();
    }
    else {
        location.reload();
    }
})

// Start quiz and timer
startQuiz();
timer();


// INS 23/25 to remember how to save highscores

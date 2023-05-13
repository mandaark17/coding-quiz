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

// Setting variables for elements
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var continueEl = document.getElementById("continue");
var sec = 30;

// Vars for global starting values
var questionsIndex = 0;
var score = 0;

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

function highScores(){
    
}

// Final text replacement
function showScore(){
    resetText();
    questionEl.innerHTML = `You scored ${score} out of 4!`;
    continueEl.innerHTML = "Try Again?";
    continueEl.style.display = "block";
    // continueEl.addEventListener("click", startQuiz());
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

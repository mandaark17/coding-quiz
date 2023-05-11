// Questions/Answers 
var questions = [
{//question 1
    question: "Which is NOT a JS variable type?",
    answers: [
        {text: "Boolean", correct: false},
        {text: "Java", correct: true},
        {text: "String", correct: false},
        {text: "Number", correct: false},
    ]
},
{//question 2
    question: "Which method returns the length of the string?",
    answers: [
        {text: "length()", correct: true},
        {text: "size()", correct: false},
        {text: "index()", correct: false},
        {text: "None of the Above", correct: false},
    ]
},
{//question 3
    question: "What is correct function syntax?",
    answers: [
        {text: "function: myFunction()", correct: false},
        {text: "function = myFunction()", correct: false},
        {text: "function myFunction()", correct: true},
        {text: "myFunction():function", correct: false},
    ]
},
{//question 4
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
    
    // Display answers
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
    }
    continueEl.style.display = "block";
}

function showScore(){
    resetText();
    questionEl.innerHTML = `You scored ${score} out of 4!`;
    continueEl.innerHTML = "Try Again?";
    continueEl.style.display = "block";
}


function endButton(){
    questionsIndex++;
    if(questionsIndex < questions.length){
        showQuestion();
    }
    else {
        showScore();
    }
}


continueEl.addEventListener("click", ()=> {
    if(questionsIndex < questions.length){
        endButton();
    }
    else {
        startQuiz();
    }
})


startQuiz();



// var optionsContainer = document.querySelector("#options-container??")

// optionsContainer.addEventListener("click", function (){
//     var selectedOption = e.target;
//     var isCorrect = selectedOption.dataset.answer;
// }

//     //hover over "SET.ITEM" to see values
//     if(isCorrect === "true"){
//         localStorage.setItem("last answer", answer)
//     else {
//         alert("Wow, you haven't studied.");
//     }
//     }
// })


// INS 23/25 to remember how to save highscores


// THIS IS AN OBJECT, MUST INCLUDE CURLY BRACES
// var jsObject = {
//     name: "javascript" ---- string
//     age: 10 ----- number
//     hobbies: ["hobby1", "hobby2"] ---array
//     x:
// }

// This is just for incrementing INS-21
// var counter = document.querySelector("#counter");
// var addButton = document.querySelector("#add");
// var subtractButton = document.querySelector("#subtract");

// var count= local/Storage.getItem("count");
// counter.textContent = count;

// addButton.addEventListener("click", function(){
//     if (count < 24)
//         count++;
//         counter.textContent = count;
//         localStorage.setItem("count", count);
// })

// subtractButton.addEventListener("click", function(){
//     if (count > 0)
//         count--;
//         counter.textContent = count;
//         localStorage.setItem("count", count);
// })



// ask about JSON.strigify and JSON.parse(localStoarge.getItem("myjsObject"))
// parse = string to object
// stringify = object to string
// sign up???
// localStorage.setItem("string", value) <--- how to set localStorage

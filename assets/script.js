// Questions/Answers text and logic
var questions = [
{
    question: "Are you alive?",
    answers: [
        {text: "no", correct: false},
        {text: "yes", correct: true},
        {text: "dont wanna be", correct: false},
        {text: "look away", correct: false},
    ]
},
{
    question: "Are you dead?",
    answers: [
        {text: "maybe", correct: false},
        {text: "no", correct: true},
        {text: "trying to be", correct: false},
        {text: "later", correct: false},
    ]
},
{
    question: " Question Text?",
    answers: [
        {text: "option 1", correct: false},
        {text: "truth boi", correct: true},
        {text: "option 3", correct: false},
        {text: "option 4", correct: false},
    ]
},
{
    question: " Question Text?",
    answers: [
        {text: "option 1", correct: false},
        {text: "truth boi", correct: true},
        {text: "option 3", correct: false},
        {text: "option 4", correct: false},
    ]
},
{
    question: " Question Text?",
    answers: [
        {text: "option 1", correct: false},
        {text: "truth boi", correct: true},
        {text: "option 3", correct: false},
        {text: "option 4", correct: false},
    ]
},
{
    question: " Question Text?",
    answers: [
        {text: "option 1", correct: false},
        {text: "truth boi", correct: true},
        {text: "option 3", correct: false},
        {text: "option 4", correct: false},
    ]
},
{
    question: " Question Text?",
    answers: [
        {text: "option 1", correct: false},
        {text: "truth boi", correct: true},
        {text: "option 3", correct: false},
        {text: "option 4", correct: false},
    ]
},
{
    question: " Question Text?",
    answers: [
        {text: "option 1", correct: false},
        {text: "truth boi", correct: true},
        {text: "option 3", correct: false},
        {text: "option 4", correct: false},
    ]
},
{
    question: " Question Text?",
    answers: [
        {text: "option 1", correct: false},
        {text: "truth boi", correct: true},
        {text: "option 3", correct: false},
        {text: "option 4", correct: false},
    ]
},
{
    question: " Question Text?",
    answers: [
        {text: "option 1", correct: false},
        {text: "truth boi", correct: true},
        {text: "option 3", correct: false},
        {text: "option 4", correct: false},
    ]
}
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
    
    var currentQuestion = questions[questionsIndex];
    var questionNum = questionsIndex + 1;
    questionEl.innerHTML = questionNum + ". " + currentQuestion.question;
    
    // Display answers
    currentQuestion.answers.forEach(answers => {
        var button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answersEl.appendChild(button);
    });
}

startQuiz();



// var optionsContainer = document.querySelector("#options-container??")

// optionsContainer.addEventListener("click", function (){
//     var selectedOption = e.target;
//     console.log(selectedOption);
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

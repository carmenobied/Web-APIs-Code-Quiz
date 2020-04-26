// 1. When user clicks the start button, then a timer starts and I am presented with a question

    // KEY VARIABLES: Declare global variables 
    var startBtn = document.getElementById("startBtn");
    var countdownTimer = document.getElementById("countdownTimer");
    var homeContainer =  document.getElementById("homeContainer");
    var quizContainer = document.getElementById("quizContainer");
    var questionHeading = document.getElementById("questionHeading");
    var choices = document.getElementById("choices");
    var answerChoice = document.getElementById("answerChoice");
    var answerChoiceA = document.getElementById("answerChoiceA");
    var answerChoiceB = document.getElementById("answerChoiceB");
    var answerChoiceC = document.getElementById("answerChoiceC");
    var answerChoiceD = document.getElementById("answerChoiceD");
    var correctAnswer = document.getElementById("correctAnswer");
    // var scoreDisplay = document.getElementById("userScore");
    // var scoreContainerEl = document.getElementById("ScoreContainer");
    // var finalTimeDisplay = document.getElementById("quizFinalTime");
    // var quizResults = document.getElementById("#quizResults");
    // var submit = document.getElementById("#submit");
    // let highScoreInput = document.getElementById("high-score-input");
    var enterHighScore = document.getElementById("enterHighScore");
    var userName = document.getElementById("userName");
    var userScore = document.getElementById("userScore");
    var displayHighScores = document.getElementById("displayHighScores");
    
// QUESTIONS ARRAY:

var questionsArray = [
{
    question: "Question: What is the HTML tag under which you can write the JavaScript code?",
    imageSrc: "",
    answerChoice: ["A) <javascript>", "B) <scripted>", "C) <script>", "D) <js>"],
    correctAnswer: 2
}, 
{
    question: "Question: Choose the correct JavaScript syntax to change the content of the following HTML code.",
    imageSrc: "",
    answerChoice: ["b1", "b2", "c2", "d2"],
    correctAnswer: 3
},
{
    question: "Question:",
    imageSrc: "",
    answerChoice: ["a3", "b3", "c3", "d3"],
    correctAnswer: 0
}, 
{
    question: "Question 4: ?",
    imageSrc: "",
    answerChoice: ["a4", "b4", "c4", "d4"],
    correctAnswer: 2
},
{
    question: "Question 5: ?",
    answerChoice: ["a5", "b5", "c5", "d5"],
    correctAnswer: 1
}];


// SCORE: Set score = 0 at the start of the game and set time-related valiables.
var score = 0;
var secondsRemaining = 75;
var followingQuestions = 0;
var quizTotalTime;
let i = 0;

// // START EVENT LISTENER: Add event listeners for when user clicks Start button to start countdown timer and quiz. 

// startBtn.addEventListener("click", function () {

//COUNTDOWN TIMER FUNCTION: Use function to set countdown timer, interval and clear interval

function setCountdownTimer() {
    var countdownTimerInterval = setInterval(function (){
        secondsRemaining--;
        countdownTimer.textContent = secondsRemaining + "seconds remaining";
        if( secondsRemaining === 0) {
            clearInterval(countdownTimerInterval);
            gameOver();
        }
    }, 1000);
};

// START EVENT LISTENER: Add event listeners for when user clicks Start button to start countdown timer and quiz questions. 
startBtn.addEventListener('click', function() {
homeContainer.style.display ="none";
quizContainer.style.display = "block";
setCountdownTimer();
setQuizQuestions();
});

// QUESTIONS FUNCTION: Set function to display questions
// Start display quiz questions and display multiple-choice answers for user to choose from 

function setQuizQuestions() {
        questionHeading.textContent = questionsArray[i].question;
        answerChoiceA.textContent = questionsArray[i].answerChoice[0]; 
        answerChoiceB.textContent = questionsArray[i].answerChoice[1]; 
        answerChoiceC.textContent = questionsArray[i].answerChoice[2]; 
        answerChoiceD.textContent = questionsArray[i].answerChoice[3]; 
        };

// 2. When user answers a question: then user is presented with another question
// Add event listener to call this function to go to next question
// Add a function to direct the user to the next question using event delegation (event.target.value) and if else statements
// Apply "Setters and Getters" methods

// 3. When user answers a question correctly, increase the score
// Alert/Display message to user stating if theyir answer is correct or incorrect
// Store user answer choices. Clear elements and update score count.

answerChoiceA.addEventListener('click', function(event) {
event.stopPropagation();
let correctChoice = "";
correctChoice = questionsArray[i].answer;
console.log(correctChoice);
if (i < questionsArray.length -1) {
    i++
}
if (event.target.textContent === correctChoice) {  
    setQuizQuestions();
    score++;
    // displayMsg.innerHTML ="Correct! Nailed it!";    
} else {
    setQuizQuestions();
    secondsRemaining -= 5;
    // displayMsg.innerHTML ="Incorrect! Better luck in the next one!";
}
console.log(score);

});

answerChoiceB.addEventListener('click', function(event) {
event.stopPropagation();
let correctChoice = "";
correctChoice = questionsArray[i].answerChoice;
console.log(correctChoice);
if (i < questionsArray.length -1) {
    i++
}
if (event.target.textContent === correctChoice) { 
    setQuizQuestions();
    score++;
    // displayMsg.innerHTML ="Correct! Nailed it!";
} else {
    setQuizQuestions();
    secondsRemaining -= 5;
    // displayMsg.innerHTML ="Incorrect! Better luck in the next one!";
}
console.log(score);
});

answerChoiceC.addEventListener('click', function(event) {
    event.stopPropagation();
    let correctChoice = "";
    correctChoice = questionsArray[i].answerChoice;
    console.log(correctChoice);
    if (i < questionsArray.length -1) {
        i++
    }
    if (event.target.textContent === correctChoice) { 
        setQuizQuestions();
        score++;
        // displayMsg.innerHTML ="Correct! Nailed it!";
    } else {
        setQuizQuestions();
        secondsRemaining -= 5;
        // displayMsg.innerHTML ="Incorrect! Better luck in the next one!";
    }
console.log(score);
});

// Highscores page 
var highscores = document.getElementById ("highScores");
var highscoresHeading = document.getElementById ("highscoresHeading");
function gameOver () {
    if (secondsRemaining === 0) {
        quizContainer.display.style = "none";
        highscores.display.style = "block";
        highscoresHeading.textContent = "Nice work! Your final score is " + score + " points! Head over to the highscores and enter your score and initials!";
    }
}
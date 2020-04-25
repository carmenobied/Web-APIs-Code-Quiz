// 0. OVERALL STRUCTURE: 
// In index.html file, create array with 5 question objects. 
// Store questions as an array of objects in a separate file named questions.js
// Create code that will ask user questions, one after another. 
// Multiple-Choice: Set up 3 choices for each and set a variable for correct answer.
// Check user's answer choice against correct answer.
// Provide user with an alert stating if it was correct or incorrect.
// Keep track of the user score/progress.
// When questions end or timer reaches 0, game ends
// When game ends, add a form where user can save initials and store/display final score
// Add buttons to go back/refresh and a button to clear high scores.

// KEY STEPS:
// 1. When user clicks the start button, then a timer starts and I am presented with a question

    // KEY VARIABLES: Declare variables 
        var startBtn = document.getElementById("startBtn");
        var quizContainer = document.getElementById("#quizContainer");
        var quizQuestions = document.getElementById("quizQuestions");
        var answerChoices = document.getElementById("answerChoices")
        var answerChoiceA = document.getElementById("A");
        var answerChoiceB = document.getElementById("B");
        var answerChoiceC = document.getElementById("B");
        var correctChoice = document.getElementById("correctChoice");
        var answerDisplay = document.getElementById("quizText");
        var countdownTimer = document.querySelector("coundownTimer");
        var scoreDisplay = document.getElementById("userScore");
        var finalTimeDisplay = document.getElementById("quizTimeFinal");
        var quizResults = document.getElementById("#quizResults");
        var submit = document.getElementById("#submit");
        
        // NOTES: Questions array and Countdown timer:
            // Store questions as an array of objects in a separate file named questions.js
            // Length of the array in questions.js determines the length of play.
            // Countdown timer -> time estimate: ~15 seconds per question, i.e. 5 questions === length of play of 75 seconds.
            // Display timer progress until quiz ends
            // Create a countdown timer that starts when the user clicks the start button 
                // Set countdown timer, counter interval, clear interval

    // QUESTIONS ARRAY:
    //  src="./script.js"

    // SCORE: Set score = 0 at the start of the game and set time-related valiables.
        var score = 0;
        var secondsRemaining = 75;
        var nextQuestions = 0;
        var countdownTimerInterval;

    // START EVENT LISTENER: Add event listeners for when user clicks Start button to start countdown timer and quiz. 

    startBtn.addEventListener("click", startCodeQuiz);

    // QUESTIONS FUNCTION: Set questions display function //
        function setQuizQuestions() {
            quizQuestions.innerHTML = "p" + quizQuestions.question;
        }
        
    // COUNTDOWN TIMER FUNCTION: Use function to set countdown timer, interval and clear interval
        function setCountdownTimer() {

            countdownTimerInterval = setInterval(function() {
            secondsRemaining--;
            console.log(secondsRemaining);
            countdownTimer.textContent = "Time: " + secondsRemaining;

                if (secondsRemaining === 0) {
                    clearInterval(timerInterval); 
                    document.querySelector("#countdownTimer").innerHTML = "Time's up!!!";
                }
                CompletionTime = 75 - quizTime
                }, 1000);
            setCountdownTimer();
        } 
        
    // START CODE QUIZ FUNCTION: Add start quiz function //
    function startCodeQuiz() {
            homeContainer.style.display ="none";
            setQuizQuestions();
            setCountdownTimer();
            quizContainer.style.display = "block";
        }

// 2. When user answers a question: then user is presented with another question
    // start quiz questions and display multiple-choice answers for user to choose from -> store answers
    // Add a function to direct the user to the next question using event delegation (event.target.value) and if else statements
    // add event listener to call this function to go to next question

// 3. When user answers a question correctly, increase the score
    // Use if, else statements
    // If userChoice is correct, increase score (with score ++) 
    // If userChoice is incorrect, subtract seconds from timer (using -= )
    // Clear elements and update score count

        // Increase score
        // function questionDisplay() { .textContent = ; }

// 4. When all questions are answered or the timer reaches 0, then the game is over
    // use event delegation and a for loop with condition for all questions answered
    // for (i = 0; i < max question count, i++) { 
    // add condition of if timer reaches 0 to end game
    // render score during quiz         

// 5. When the game is over, then user can save initials and score
    // Direct user to Results and Submit page
    // Apply "Setters and Getters" methods
    // Set arrays for user input
    // Create a function that stores user's input (initials) in localStorage 
    // "Setters": Store array (localStorage.setItem) and Use JSON method (JON.string) to convert object into string from the user input array
    
    // Direct user to Highscores page
    // Create a Highscores function and set arrays that store user input in localStorage
    // "Getters": Store array (localStorage.getItem) and use JSON method (JON.parse) to convert string into object for high scores list data 
    // Then use a for loop of these arrays
    // Create a high scores list element and append it
    // Add an event listener for the submit button which submits and adds to score.
    // Display or alert total at the end (alert("You got " + score + "/" + questions.length);

    // Store in localStorage and re-render
        // Add buttons and functions to go back/refresh and a button to clear high scores.
            // refresh()
            // clear()
            // window.location.reload = "";
            // localStorage()
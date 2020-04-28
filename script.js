// 1. When user clicks the start button, then a timer starts and I am presented with a question

    // KEY VARIABLES: Declare global variables 
    var startBtn = document.getElementById("startBtn");
    var time = 75;
    var time_remaining = true;
    var time_start= false;
    var countdownTimer = document.getElementById("countdownTimer");
    var homeContainer =  document.getElementById("homeContainer");
    var quizContainer = document.getElementById("quizContainer");
    var questionHeading = document.getElementById("questionHeading");
    var answerChoiceA = document.getElementById("answerChoiceA");
    var answerChoiceB = document.getElementById("answerChoiceB");
    var answerChoiceC = document.getElementById("answerChoiceC");
    var answerChoiceD = document.getElementById("answerChoiceD");
    var correctAnswer = document.getElementById("correctAnswer");    
    var high_scores= [];
    var output="";
    var score = 0;
    let i = 0;

// QUESTIONS ARRAY:

var questionsArray = [
{
    question: "Question: What is the HTML tag under which you can write the JavaScript code?",
    imageSrc: "",
    answerChoice: ["A) <javascript>", "B) <scripted>", "C) <script>", "D) <js>"],
    correctAnswer: 2
}, 
{
    question: "Question: What are variables used for in JavaScript Programs?",
    imageSrc: "",
    answerChoice: ["A) Storing numbers, dates, or other values", "B) Varying randomly", "D) Causing high-school algebra flashbacks", "D) None of the above"],
    correctAnswer: 0
},
{
    question: "Question: Which method adds a new item to the end of an array and returns the new length?",
    imageSrc: "",
    answerChoice: ["A) shift()", "B) return() ", "C) pop() ", "D) push()"],
    correctAnswer: 3
}, 
{
    question: "Question: Which of the following can't be done with client-side JavaScript?",
    imageSrc: "",
    answerChoice: ["A) Sending a form's contents by email", "B) Validating a form", "C) Storing the form's contents to a database file on the server", "D) None of the above"],
    correctAnswer: 2
},
{
    question: "Question: Which of the following are capabilities of functions in JavaScript?",
    answerChoice: ["A) Return a value", "B) Accept parameters", "C) Accept parameters and Return a value", "D) All of the above"],
    correctAnswer: 1
}];

//COUNTDOWN TIMER FUNCTION: Use function to set countdown timer, interval and clear interval. Set score = 0 at the start of the game and set time-related valiables.

var countdownTimerInterval = setInterval(setCountdownTimer, 1000);
    
function setCountdownTimer() {
        if (time_start)
        time--;
        if(time<= 0) {
        end_quiz();
        time = 0;    
        // clearInterval(countdownTimerInterval);
        }
        document.getElementById("timer").innerHTML = time;
        // countdownTimer.textContent = secondsRemaining + "seconds remaining";
    }

// START EVENT LISTENER: Add event listeners for when user clicks Start button to start countdown timer and quiz questions. 
startBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    homeContainer.style.display ="none";
    countdownTimer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start= true;
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
        correctAnswer= questionsArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);
        // check answer
        if (0 === correctAnswer) { 
            // correct + points and alert
            alert("Correct! Nailed it!"); 
            score++;    
        } else {
            time_remaining -= 5;
            // incorrect - time and alert
            alert("Incorrect! Better luck in the next one!");
        }
        i++ 
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
            setQuizQuestions();
        };
    });

answerChoiceB.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
        if (1 === correctAnswer) { 
            alert("Correct! Nailed it!");
            score++;
        } else {
            time_remaining -= 5;
            alert("Incorrect! Better luck in the next one!");
        }
        i++ 
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
            setQuizQuestions();
        };
    });

answerChoiceC.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
    if (2 === correctAnswer) { 
        alert("Correct! Nailed it!");
        score++;
    } else {
        time_remaining -= 5;
        alert("Incorrect! Better luck in the next one!");
    }
    i++ 
    if (i >= questionsArray.length -1) {
    end_quiz();
    } else {
        setQuizQuestions();
    };
    });

answerChoiceD.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer= questionsArray[i].correctAnswer.value;
    console.log(correctAnswer);
    if (3 === correctAnswer) { 
        alert("Correct! Nailed it!");
        score++;
    } else {
        time_remaining -= 5;
        alert("Incorrect! Better luck in the next one!");
    }
    i++ 
    if (i >= questionsArray.length -1) {
       end_quiz();
    } else {
        setQuizQuestions();
    };
});

// function end_quiz(){
//     if(setCountdownTimer){
//         i++;
//     }
//     if(i>=5){
//      end_quiz();
//     }else{
//     }

        //end quiz
        function end_quiz(){
            document.getElementById("game_over").style.display= "block";
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("countdownTimer").style.display= "none";
            document.getElementById("score_keeper").style.display= "none";
            document.getElementById("AnswerResponse").innerHTML="";
            document.getElementById("end_score").innerHTML= score;
            }

        localStorage.setItem("score",JSON.stringify(AnswerResponse));
        // localStorage.setItem("name", JSON.stringify(initials));
        
        function view_high_scores(){
        
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("AnswerResponse").innerHTML="";

            //submit score and initals
        
            high_scores.push(document.getElementById("initials").value + " " + score);
        //	console.log(document.getElementById("initals").value + " " + score);
        
            score=0;
        
            document.getElementById("game_over").style.display= "none";
            document.getElementById("high_scores_page").style.display="block";
        
            output="";
            for(let k=0; k<high_scores.length; k++){
                 output = output + "  " + high_scores[k];
            }
        
            document.getElementById("high_scores").innerHTML= output ;
             clear_up();
        }
        
        function go_home(){	
                document.getElementById("high_scores_page").style.display= "none";
                document.getElementById("homeContainer").style.display= "block";
                clear_up();
        }
        
        function clear_hs(){
        
            high_scores.splice(0, high_scores.length);
        }
        
        function clear_up(){
        
        time=75;
        time_remaining=true;
        time_start= false;
        i=0;
        score=0;
        }

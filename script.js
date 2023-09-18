//build start button (done, need to center start button)
// when user clicks start button, 
//then timer starts
//build timer
//set inital countdowntime (isnt working)
//build question and answer bank (done)
//declare an array with questions and answers (done)
//define objects that hold the question, answer key and correct answers (done)

var questionBank = [

    {
        question: 'What is the Captial of Texas?',

        answer: {
            a: 'Dallas',
            b: 'Austin',
            c: 'Houston',
            d: 'San Antonio'
        },

        correctAnswer: 'b'
        
    },

    {
        question: 'To assign a value to variable you should use which operator?',

        answer: {
            a: '+',
            b: '/',
            c: '*',
            d: '='
        },

        correctAnswer: 'd'
    },

    {
        question: 'Which of the following is a selector in CSS?',

        answer: {
            a: 'container',
            b: 'header',
            c: 'class',
            d: 'semantic tag'
        },

        correctAnswer: 'c'
    },

    {
        question: 'What kind of language is JavaScrip?',

        answer: {
            a: 'programming',
            b: 'styling',
            c: 'mark-up',
            d: 'foreign'
        },

        correctAnswer: 'a'
    }
    
];


//when page loads timer starts (throwing 'textContent' error)

var countDown = 60;
var timerEl = document.getElementById("count-down");

function setTimer() {
    var timerInterval = setInterval(function(){
        if(countDown > 0) {
        countDown--;
        timerEl.textContent = countDown;
        }
        if(countDown === 0) {
        timerEl.textContent = "Game Over!";
        clearInterval(timerInterval);
        }
    }, 1000);
}


// function sendMessage() {
//     timerEl.textContent = "Times Up!"
//}

//when page loads user clicks start button to begin quiz

//user is presented with first question
//user provides input
//take input from user
//compare input to answer bank
//if input is correct return 'correct'
//if input is incorrect return 'incorrect'
    // a. repeat previous 3 steps 
//if timer reaches 0 before all questions are answered, return 'fail'
//if user answers all questions return 'user score'
// THEN I can save my initials and my score
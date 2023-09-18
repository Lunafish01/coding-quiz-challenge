//when page loads timer starts 
//build timer for 60 secs 
//show message 'Game Over!' when timer reachs 0 

var countDown = 60;
var timerEl = document.getElementById("count-down");

function setTimer() {
    var timerInterval = setInterval(function(){
        if(countDown > 0) {
            countDown--;
            timerEl.textContent = "00:" + countDown;
        }
        if(countDown === 0) {
            timerEl.textContent = "Game Over!";
            clearInterval(timerInterval);
        }
    }, 1000);
}
//build start button (done, need to center start button)
//game should start when page loads or start button is clicked



//declare an array with questions and answers (done)
//build question and answer bank (done)
//make sure to include correct aswers in array objects (done)

var questionBank = [
    
    {
        question: 'What does \'CSS\' mean?',

        answer: {
            a: 'Cascading Super Styles',
            b: 'Cascading Style Sheets',
            c: 'Cascading Seven Seas',
            d: 'Cascading Sincerely Sara'
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
        question: 'Which of the following is a .selector in CSS?',

        answer: {
            a: 'container',
            b: 'header',
            c: 'class',
            d: 'id'
        },

        correctAnswer: 'c'
    },

    {
        question: 'What kind of language is JavaScript?',

        answer: {
            a: 'programming',
            b: 'styling',
            c: 'mark-up',
            d: 'foreign'
        },

        correctAnswer: 'a'
    }
    
];

//user is presented with first question
//user provides input
//store user input 
//compare input to answer bank
//if input is correct return 'correct'
//if input is incorrect return 'incorrect'
    // a. repeat previous 3 steps 
//display user score when all questions are answered or time runs out
//user enters and saves initials and score
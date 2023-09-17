//build start button 
// when user clicks start button, 
//then timer starts


//build timer
//set inital countdowntime (needs work)
var timerText = document.getElementById("timer-text");
var countDown = 120;
function setTimer() {
    var timerInterval = setInterval(function(){
        countDown--;
        timerText.textContent = countDown + " time is running out.";

        if(countDown === 0) {
            clearInterval(timerInterval);
        }
    }, 2000);
}
setTimer();



//build question and answer bank (almost done)
var questionBank = [

    {
        question: 'What is the Captial of Texas?',

        answer: {
            a: 'Dallas',
            b: 'Austin',
            c: 'Houston',
            d: 'San Antonio'
        },
    }

    {
        question: 'To assign a value to variable you should use which operator?',

        answer: {
            a: '+',
            b: '/',
            c: '*',
            d: '='
        }
    }

    {
        question: 'Which of the following is a selector in CSS?',

        answer: {
            a: 'container',
            b: 'header',
            c: 'class',
            d: 'semantic tag'
        }
    }

    {
        question: 'What kind of language is JavaScrip?',

        answer: {
            a: 'programming',
            b: 'styling',
            c: 'mark-up',
            d: 'foreign'
        }
    }
    
];

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
//when page loads timer starts 
//build timer for 60 secs 
//show message 'Game Over!' when timer reachs 0 
var questions = [
    
    {
        question: 'What does \'CSS\' mean?',

        answers: [
            {text: 'Cascading Super Sayians', value: false},
            {text: 'Cascading Style Sheets', value: true},
            {text: 'Cascading Seven Seas', value: false},
            {text: 'Cascading Sincerely Sara', value: false},
        
        ]
        
    },

    {
        question: 'To assign a value to variable you should use which operator?',

        answer: [
            {text: '+', value: false},
            {b: '/', value: false},
            {c: '*', value: false},
            {d: '=', value: true},
        ]
    },

    {
        question: 'Which of the following is a .selector in CSS?',

        answer: [
            {text: 'container', value: false},
            {text: 'header', value: false},
            {text: 'class', value: true},
            {text: 'id', value: false},
        ]
    },

    {
        question: 'What kind of language is JavaScript?',

        answer: [
            {text: 'programming', value: true},
            {text: 'styling', value: false},
            {text: 'mark-up', value: false},
            {text: 'foreign', value: false},
        ]
    }
];

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
// //build start button (done, need to center start button)
// //game should start when page loads or start button is clicked
var questionEl = document.getElementById('question');
var answerBtn= document.getElementById('answer-buttons');
var nextBtn = document.getElementById('next-button');

var currentQuestionIndex = 0;
var score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.textContent = 'Next';
    showQuestion();
}

function showQuestion() {
     var currentQuestion = questions[currentQuestionIndex];
     var questNum = currentQuestion + 1;

     questionEl.textContent = questNum + '. ' + currentQuestion.question;

     currentQuestion.answers.forEach(answer => {
        var answerButton = document.createElement('button');
        answerButton.textContent = answer.text;
        answerButton.classList.add('answer-btn');
        answerBtn.appendChild(answerButton);
     });
}

function resetQuestions() {
    nextBtn.style.display = 'none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}
startQuiz();


// //declare an array with questions and answers (done)
// //build question and answer bank (done)
// //make sure to include correct aswers in array objects (done)
// var currentQuestionIndex = 0;
//user is presented with first question
//validate use input 
//check answers
//output 'right' or 'wrong' 
//user provides input
//store user input 
//compare input to answer bank
//if input is correct return 'correct'
//if input is incorrect return 'incorrect'
    // a. repeat previous 3 steps 
//display user score when all questions are answered or time runs out
//user enters and saves initials and score
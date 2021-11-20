
// create questions here
var questions = [
    new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML", "CSS", "HTML"], "HTML"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("Webdevtrick.com is about..", ["Web Design", "Graphic Design", "SEO & Development", "All"], "All"),
    new Question("A very useful tool used during development and debugging for printing content to the debugger is :", ["javascript", "terminal/bash", "for loop", "console.log"], "consol.log"),
    new Question("which one of this is a javascript package manager ?", ["node.js", "typescript", "npm", "angular"], "node.js"),
    new Question("arrays in javaScript can be used to store", ["numbers and strings", "other arrays", "booleans", "all of the above"], "all of the above")
];
var count = 75 

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    if (this.answer !== choice) {
        count = count - 10;

    }
    else {
        return this.answer === choice;
    }


}


function populate() {


    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show question

        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

    }

};
//============================================
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();

    }
};


//===============================================

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;

};
//=================TIMER COUNT DOWN
function timer() {
    startDiv.setAttribute("class", "hidden");
    
    var interval = setInterval(function () {
        document.getElementById('count').innerHTML = "Timer" + " " + count;
        count--;
        if (count <= 0) {
            clearInterval(interval);
            document.getElementById('count').innerHTML = 'END OF QUIZ';
            // or...
            alert("You're out of time!");
            showScores();
        }
    }, 1000);
}
function startGame (){
    populate();
    timer();
}
var startButton = document.getElementById("startbutton");
var startDiv = document.getElementById("start1");
startButton.addEventListener("click", startGame);


// create quiz
var quiz = new Quiz(questions);

// display quiz
//populate();

timeRemaining = 5;
correctAnswers = 0;
incorrectAnswers = 0;
currentQuestionNum = 0;
unansweredQuestions = 0;
questionGuessesArray = [

        //creating an array that contains the question and a sub-array of answers
          {
            question: "The main character in 'Mad Men' is:",
            answerChoices: ["Don Draper", "Bert Cooper", "Pete Campbell", "Peggy Olson"],
            } , {
            question: "The series takes place in:",
            answerChoices: ["Los Angeles", "Chicago", "New York", "Washington D.C."],
            } , {
            question: "The industry setting is:",
            answerChoices: ["Law", "Banking", "Accounting", "Advertising"],
            } , {
            question: "How many episodes of 'Mad Men' are there?",
            answerChoices: ["74", "86", "92", "105"],
            } , {
            question: "The series creator was:",
            answerChoices: ["Vince Gilligan", "Matthew Weiner", "David Simon", "Daivd Chase"],
            } , {
            question: "What is the name of Don Draper's daughter?",
            answerChoices: ["Elizabeth", "Sally", "Sloan", "Meghan"],
            } , {
            question: "What state does the show's final scene take place in?",
            answerChoices: ["California", "Florida", "Texas", "New York"],
            } , {
            question: "What actor portrays Don Draper?",
            answerChoices: ["Matthew McConaughey", "Brad Pitt", "Idris Elba", "Jon Hamm"],
            } , {
            question: "What is Don Draper's cocktail of choice",
            answerChoices: ["Manhattan", "Martini", "Old Fashioned", "Harvey Wallbanger"],
            } , {
            question: "'Mad Men' originally aired on which network?",
            answerChoices: ["Netflix", "AMC", "HBO", "Showtime"],
            }
]

 
//document ready function so the page can load
$(document).ready(function(){

    
    //function to decrement the counter by 1 second
    function runTime(){
        setIntervalID = setInterval(function(){
            $("#correct").empty();
            $("#wrong").empty();
            $("#timeRemaining").html("<h2> Time Remaining: " + timeRemaining + " seconds </h2>");
            timeRemaining --;
            //if statement to take affect if the timer runs out
            if (timeRemaining == -1) {
                $("#wrong").html("Too slow!")
                currentQuestionNum ++;
                unansweredQuestions ++;
                console.log(unansweredQuestions);
                setTimeout (currentQuestion, 3000);
                clearInterval(setIntervalID);
                timeRemaining = 5;
                setTimeout (runTime, 2000);

            };
            //if statement that takes affect when all of the questions have been answered
            if (currentQuestionNum === 10){
                clearInterval(setIntervalID);
                $("#timeRemaining").empty();
                $("#gameOver").html("Game Over!");
                $("#correctAnswers").html("Correct Answers: " + correctAnswers);
                $("#incorrectAnswers").html("Incorrect Answers: " + incorrectAnswers);
                $("#unansweredQuestions").html("Unanswered Questions: " + unansweredQuestions);
            }
        },1000 );
    }

    

    //when start button is selected
    $("#start").on("click", function(){

        //hiding start button after it is clicked
        $("#start").hide();
        currentQuestion()
        runTime();
        $(".answers").on("click", function(){
            
            //if statement to handle if the answer was correct or now
            if (currentQuestionNum === 0 && this.id == "answer1") {
                answerCorrect()
            } else if (currentQuestionNum === 0 && this.id !== "answer1") {
                answerIncorrect()
            } else if (currentQuestionNum === 1 && this.id == "answer3") {
                answerCorrect()
            } else if (currentQuestionNum === 1 && this.id !== "answer3") {
                answerIncorrect()
            } else if (currentQuestionNum === 2 && this.id == "answer4") {
                answerCorrect()
            } else if (currentQuestionNum === 2 && this.id !== "answer4") {
                answerIncorrect()
            } else if (currentQuestionNum === 3 && this.id == "answer3") {
                answerCorrect()
            } else if (currentQuestionNum === 3 && this.id !== "answer3") {
                answerIncorrect()
            } else if (currentQuestionNum === 4 && this.id == "answer2") {
                answerCorrect()
            } else if (currentQuestionNum === 4 && this.id !== "answer2") {
                answerIncorrect()
            } else if (currentQuestionNum === 5 && this.id == "answer2") {
                answerCorrect()
            } else if (currentQuestionNum === 5 && this.id !== "answer2") {
                answerIncorrect()
            } else if (currentQuestionNum === 6 && this.id == "answer1") {
                answerCorrect()
            } else if (currentQuestionNum === 6 && this.id !== "answer1") {
                answerIncorrect()
            } else if (currentQuestionNum === 7 && this.id == "answer4") {
                answerCorrect()
            } else if (currentQuestionNum === 7 && this.id !== "answer4") {
                answerIncorrect()
            } else if (currentQuestionNum === 8 && this.id == "answer3") {
                answerCorrect()
            } else if (currentQuestionNum === 8 && this.id !== "answer3") {
                answerIncorrect()
                //final if to handle the end of the game
            } else if (currentQuestionNum === 9 && this.id == "answer2") {
                $("#correct").html("Correct!");
                currentQuestionNum ++;
                correctAnswers ++;
                $(".question").empty();
                $(".answers").empty();
                $("#timeRemaining").empty();
                clearInterval(setIntervalID);
                runTime();
                console.log(correctAnswers)
            } else if (currentQuestionNum === 9 && this.id !== "answer2") {
                $("#wrong").html("Wrong!")
                currentQuestionNum ++;
                incorrectAnswers ++;
                $(".question").empty();
                $(".answers").empty();
                $("#timeRemaining").empty();
                clearInterval(setIntervalID);
                runTime();
                console.log(incorrectAnswers)
            } 
        });
    });

 
    //function to clear out divs and append next question
    function currentQuestion() {
        $(".question").empty();
        $(".answers").empty();
        $("#question").html(questionGuessesArray[currentQuestionNum].question);
        $("#answer1").html(questionGuessesArray[currentQuestionNum].answerChoices[0]);
        $("#answer2").html(questionGuessesArray[currentQuestionNum].answerChoices[1]);
        $("#answer3").html(questionGuessesArray[currentQuestionNum].answerChoices[2]);
        $("#answer4").html(questionGuessesArray[currentQuestionNum].answerChoices[3]);
    }

    //function to call when an answer is correct
    function answerCorrect() {
        $("#correct").html("Correct!");
        currentQuestionNum ++;
        correctAnswers ++;
        setTimeout (currentQuestion, 3000)
        clearInterval(setIntervalID);
        timeRemaining = 5;
        setTimeout (runTime, 2000)
        console.log(correctAnswers)
    }

    //function to call when an answer is wrong
    function answerIncorrect() {
        $("#wrong").html("Wrong!")
        currentQuestionNum ++;
        incorrectAnswers ++;
        setTimeout (currentQuestion, 3000)
        clearInterval(setIntervalID);
        timeRemaining = 5;
        setTimeout (runTime, 2000)
        console.log(incorrectAnswers)
    }
});


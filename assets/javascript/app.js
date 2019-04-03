timeRemaining = 5;
correctAnswers = 0;
incorrectAnswers = 0;
currentQuestionNum = 0;
questionGuessesArray = [

          {
            question: "This is Question 1",
            answerChoices: ["This is Q1A1", "This is Q1A2", "This is Q1A3", "This is Q1A4"],
            answer: 0
            } , {
            question: "This is Question 2",
            answerChoices: ["This is Q2A1", "This is Q2A2", "This is Q2A3", "This is Q2A4"],
            answer: 0
            } , {
            question: "This is Question 3",
            answerChoices: ["This is Q3A1", "This is Q3A2", "This is Q3A3", "This is Q3A4"],
            answer: 0
            } , {
            question: "This is Question 4",
            answerChoices: ["This is Q4A1", "This is Q4A2", "This is Q4A3", "This is Q4A4"],
            answer: 0
            } , {
            question: "This is Question 5",
            answerChoices: ["This is Q5A1", "This is Q5A2", "This is Q5A3", "This is Q5A4"],
            answer: 0
            } , {
            question: "This is Question 6",
            answerChoices: ["This is Q6A1", "This is Q6A2", "This is Q6A3", "This is Q6A4"],
            answer: 0
            } , {
            question: "This is Question 7",
            answerChoices: ["This is Q7A1", "This is Q7A2", "This is Q7A3", "This is Q7A4"],
            answer: 0
            } , {
            question: "This is Question 8",
            answerChoices: ["This is Q8A1", "This is Q8A2", "This is Q8A3", "This is Q8A4"],
            answer: 0
            } , {
            question: "This is Question 9",
            answerChoices: ["This is Q9A1", "This is Q9A2", "This is Q9A3", "This is Q9A4"],
            answer: 0
            } , {
            question: "This is Question 10",
            answerChoices: ["This is Q10A1", "This is Q10A2", "This is Q10A3", "This is Q10A4"],
            answer: 0
            }
]

 

$(document).ready(function(){

    function runTime(){
        setIntervalID = setInterval(function(){
            $("#timeRemaining").html("<h2> Time Remaining: " + timeRemaining + " seconds </h2>");
            timeRemaining --;
            if (timeRemaining == 0) {
                currentQuestionNum ++;
                currentQuestion();
                clearInterval(setIntervalID);
                timeRemaining = 5;
                runTime();/////////////////this is probably the error
            };
        },1000 );
    }

    //when start button is selected
    $("#start").on("click", function(){

        //hiding start button after it is clicked
        $("#start").hide();
        currentQuestion()
        runTime();
        $(".answers").on("click", function(){

            if (questionGuessesArray[0] && this.id == "answer1") {
                currentQuestionNum ++;
                currentQuestion();
                clearInterval(setIntervalID);
                timeRemaining = 5;
                runTime();
            } else if (questionGuessesArray[0] && this.id !== "answer1") {
                currentQuestionNum ++;
                currentQuestion();
                clearInterval(setIntervalID);
                timeRemaining = 5;
                runTime();
            }
        });
    });

 

    function currentQuestion() {
        $(".question").empty();
        $(".answers").empty();
        $("#question").html(questionGuessesArray[currentQuestionNum].question);
        $("#answer1").html(questionGuessesArray[currentQuestionNum].answerChoices[0]);
        $("#answer2").html(questionGuessesArray[currentQuestionNum].answerChoices[1]);
        $("#answer3").html(questionGuessesArray[currentQuestionNum].answerChoices[2]);
        $("#answer4").html(questionGuessesArray[currentQuestionNum].answerChoices[3]);
    }
});


timeRemaining = 5;
questionCount = 0;
correctAnswers = 0;
incorrectAnswers = 0;

questionGuessesArray = [
          {
            question: "This is Question 1",
            answerChoices: ["This is Q1A1", "This is Q1A2", "This is Q1A3", "This is Q1A4"],
            answer: 0
            } , {
            question: "This is Question 1",
            answerChoices: ["This is Q2A1", "This is Q2A2", "This is Q2A3", "This is Q2A4"],
            answer: 1
            } , {
            question: "This is Question 1",
            answerChoices: ["This is Q3A1", "This is Q3A2", "This is Q3A3", "This is Q3A4"],
            answer: 2
            } 
]

$(document).ready(function(){

    console.log(questionGuessesArray[2].answer1);//can reach in and grab the specific answer i want

    function runTime(){
        setIntervalID = setInterval(function(){
            $("#timeRemaining").html("<h2> Time Remaining: " + timeRemaining + " seconds </h2>");
            if (timeRemaining === 0) {
                clearInterval(setIntervalID);
                questionCount ++;
                console.log(questionCount);//not affectig anything yet
            };
            timeRemaining --;
        },1000 );
    }

    //when start button is selected
    $("#start").on("click", function(){

        //hiding start button after it is clicked
        $("#start").hide();

        
        

                $("#question").html(questionGuessesArray[0].question);
                $("#answer1").html(questionGuessesArray[0].answerChoices[0]);
                $("#answer2").html(questionGuessesArray[0].answerChoices[1]);
                $("#answer3").html(questionGuessesArray[0].answerChoices[2]);
                $("#answer4").html(questionGuessesArray[0].answerChoices[3]);
 
        runTime();

    });

    $(".answers").on("click", function(){
        clearInterval(setIntervalID);
        //identifying which answer was clicked
        if (questionGuessesArray[0] && this.id == "answer1") {
            console.log("right answer");
            setTimeout (function(){ 
                correctAnswers ++;
                console.log(correctAnswers);
                $(".question").empty();
                $(".answers").empty();
                $("#question").html(questionGuessesArray[1].question);
                $("#answer1").html(questionGuessesArray[1].answerChoices[0]);
                $("#answer2").html(questionGuessesArray[1].answerChoices[1]);
                $("#answer3").html(questionGuessesArray[1].answerChoices[2]);
                $("#answer4").html(questionGuessesArray[1].answerChoices[3]);
                clearInterval(setIntervalID);
                timeRemaining = 5;
                runTime();
            }, 2000)
        } else {
            console.log("wrong answer");
            setTimeout (function(){ 
                incorrectAnswers ++;
                console.log(incorrectAnswers);
                $(".question").empty();
                $(".answers").empty();
                $("#question").html(questionGuessesArray[1].question);
                $("#answer1").html(questionGuessesArray[1].answerChoices[0]);
                $("#answer2").html(questionGuessesArray[1].answerChoices[0]);
                $("#answer3").html(questionGuessesArray[1].answerChoices[0]);
                $("#answer4").html(questionGuessesArray[1].answerChoices[0]);
                clearInterval(setIntervalID);
                timeRemaining = 5;
                runTime();
            }, 2000)
        }


    });
});


///when interval reaches 0...need to set time remaining back to 5 and run the time decrement again
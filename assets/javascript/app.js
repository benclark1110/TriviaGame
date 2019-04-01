timeRemaining = 5;
questionCount = 0;

questionGuessesArray = [
          {
            question: "This is Question 1",
            answer1: "This is Q1A1",
            answer2: "This is Q1A2",
            answer3: "This is Q1A3",
            answer4: "This is Q1A4"
            } , {
            question: "This is Question 1",
            answer1: "This is Q1A1",
            answer2: "This is Q1A2",
            answer3: "This is Q1A3",
            answer4: "This is Q1A4"
            } , {
            question: "This is Question 1",
            answer1: "This is Q1A1",
            answer2: "This is Q1A2",
            answer3: "This is Q1A3",
            answer4: "This is Q1A4"
            } 
]

$(document).ready(function(){

    console.log(questionGuessesArray[2].answer1);//can reach in and grab the specific answer i want

    //when start button is selected
    $("#start").on("click", function(){

        //hiding start button after it is clicked
        $("#start").hide();

        
        function runTime(){
            var setIntervalID = setInterval(function(){
                $("#timeRemaining").html("<h2>" + timeRemaining + "</h2>");
                timeRemaining --;
                if (timeRemaining === 0) {
                    clearInterval(setIntervalID);
                    questionCount ++;
                    console.log(questionCount);//not affectig anything yet
                };
            },1000 );
        }

        //function showQuestionAndAnswers(){
          //  for (i = 0; i < questionGuessesArray; i++) {
                $("#question").html(questionGuessesArray[0].question);
                $("#answer1").html(questionGuessesArray[0].answer1);
                $("#answer2").html(questionGuessesArray[0].answer2);
                $("#answer3").html(questionGuessesArray[0].answer3);
                $("#answer4").html(questionGuessesArray[0].answer4);
            //}
        //}

        //showQuestionAndAnswers()
        runTime();

    });
});


///when interval reaches 0...need to set time remaining back to 5 and run the time decrement again
timeRemaining = 5;
questionCount = 0;
questionsArray = [".question1", ".question2", ".question3"]


$(document).ready(function(){

    //hiding all questions at start of game
    $(".question1").hide();
    $(".question2").hide();
    $(".question3").hide();

    $("#start").on("click", function(){

        //hiding start button after it is clicked
        $("#start").hide();

       // for (i = 0; i < questionsArray.length; i++) {
           // $([i]).show();
           // runTime();
        //}
        
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

        $(".question1").show();
        runTime();

    });
});


///when interval reaches 0...need to set time remaining back to 5 and run the time decrement again
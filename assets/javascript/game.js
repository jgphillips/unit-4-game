
// $(document).ready(function() {
    var description = "";
    var firstNumber = 0;
    var secondNumber =0;
    var thirdNumber = 0;
    var fourthNumber = 0;
    
    var gameScore = 0;
    var playerScore = 0;

    initializePage();

    function initializePage() {
        description =   "You will be given random numbers at the start of the game. \n" + 
        "There are four crytals below. By clickon on a crystal you will add specific amount of points to yout total score." + 
        "You win the game by matching your total score to random number, you lose the game if your total score goes above the random number" +
        "The value of each crystal is hidden until you click on it" +
        "Each time when the game starts ,the game will change the value of each crystal";

        firstNumber = Math.floor((Math.random() * 5) + 1); 
        secondNumber = Math.floor((Math.random() * 10) + 2); 
        thirdNumber = Math.floor((Math.random() * 10) + 3); 
        fourthNumber = Math.floor((Math.random() * 10) + 5); 

        gameScore = Math.floor((Math.random() * 61) + 40);
        console.log(gameScore);

        $(".gameDescription").text(description);
        $(".totalScore").text(0);

    }

    $(".gem").on("click", function () {
        var id = $(this).attr('id');
        var value = parseInt($(this).attr('value'));
        console.log(gameScore);
        console.log(id);

        switch(id) {
            case "greenGem":
                playerScore = playerScore + firstNumber;
                console.log("This gem is valued at: "+ firstNumber);
                break;
            case "yellowGem":
                playerScore = playerScore + secondNumber;
                console.log("This gem is valued at: "+secondNumber);
                break;
            case "redGem":
                playerScore = playerScore + thirdNumber;
                console.log("This gem is valued at: "+thirdNumber);
                break;
            case "blackGem":
                playerScore = playerScore + fourthNumber;
                console.log("This gem is valued at: " +fourthNumber);
                break;
        }

        if (gameScore == playerScore) {
            console.log("You won! game is done!");
        } else if(playerScore < gameScore) {
            // we're setting player 2
            console.log("Your score is :" + playerScore);
            $(".totalScore").html("<p>Hello</p>" + playerScore.toString());
        }else{
            console.log("game over!");
        }
    });

// });
//Starts the game as soon as the page is loaded (no prompt needed to start the game)(wrapper).
$(document).ready(function () {
    console.log("JS File");

    // Creates an array
    var myArray = ["one", "two", "three", "four"];

    // for loop but my game is working without it
    // for (var i = 0; i <= myArray.length; i++) {

    // }

    //Selects a random number between 19 - 120.
    var Random = Math.floor(Math.random() * 101 + 19)

    //Adding the random number to the randomNumber id in the HTML document.
    $("#randomNumber").text(Random);

    //Setting up random numbers for each crystal.
    //Random number should be between 1 -12.
    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    //assigning values to each crystal by id.
    $("#one").attr("data-value", num1);
    $("#two").attr("data-value", num2);
    $("#three").attr("data-value", num3);
    $("#four").attr("data-value", num4);

    //Creating variables to hold the player total and number of wins and losses.
    //They start at zero.
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#numberOfWins").text(wins);
    $("#numberOfLosses").text(losses);


    //click function
    $(".crystal").click(function (event) {
        console.log(event.target.dataset.value)
        var crystalValue = event.target.dataset.value
        playerTotal = parseInt(playerTotal) + parseInt(crystalValue)
        console.log(playerTotal)


    //sets win/lose conditions
        if (playerTotal === Random) {
            wins();
        } else if (playerTotal > Random) {
            lose();
        }
    });

    //Resets the game.
    function reset() {
        Random = Math.floor(Math.random() * 19 + 120);
        console.log(Random)
        $("#randomNumber").text(Random);
        num1 = Math.floor(Math.random() * 1 + 12)
        num2 = Math.floor(Math.random() * 1 + 12)
        num3 = Math.floor(Math.random() * 1 + 12)
        num4 = Math.floor(Math.random() * 1 + 12)
        $("#one").attr("data-value", num1);
        $("#two").attr("data-value", num2);
        $("#three").attr("data-value", num3);
        $("#four").attr("data-value", num4);
        console.log("Value", num1, num2, num3, num4);
        playerTotal = 0;
        $("#finalTotal").text(playerTotal);
    }

    // Wins function
    //Adds the wins to playerTotal
    function wins() {
        alert("You win!");
        wins++;
        $("#numberOfWIns").text(wins);
        reset();
    }
    // Lose function
    //Adds the losses to the playerTotal.
    function lose() {
        alert("You lose!");
        losses++;
        $("#numberOfLosses").text(losses);
        reset();
    }
});


// wins function
// "Your total score" is not showing up??
// all my random jewell values are sometimes 12 


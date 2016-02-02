$(document).ready(function () {

    //define computer's guess on page load-- DONE
    //turn user's guess into int (once they hit Guess!) and compare to computer's guess --DONE
    //return whether guess is hot or cold (first guess should always be hot?), subsequent guesses compare to user's previous guess
    //once user guesses, say you won -- DONE
    //count number of guesses -- DONE
    //clicking on new game reloads page

    /*Declare global variables*/
    var answer = parseInt(Math.random() * 100);
    console.log(answer);
    var intGuess;
    var guessCount = 0;
    var oldGuess = 0;
    console.log(intGuess);
    console.log("the old guess initially is " + oldGuess)

    /*Define functions*/
    //Validation should check it's the right number, that a value has been put in
    //if all these are met, it should lead to clearing the input
    //increasing the counter, determining if the user guessed right, and recording their guess
    function validation(guess) {

        if (intGuess < 1 || intGuess > 100) {
            $('#feedback').text("Choose a value between 1-100!");
            console.log("This is not a valid entry.");
            $('#userGuess').val('');
        } else if (intGuess === NaN) { // HELP!
            $('#feedback').text("Please enter a value");
            console.log("Please enter a value");
        } else {
            console.log("Guess is OK!");
            $('#userGuess').val('');
            $('#feedback').text("Make your Guess!");
            counter();
            if (oldGuess != 0) {
                mainFeedback(answer, oldGuess, intGuess);
            } else {
                $('#feedback').text("Nope, guess again!");
            }
            recordGuesses();
        }

    }

    function recordGuesses() {
        $('#guessList').append('<li>' + intGuess + '</li>');
    }

    function newGame() {
        document.location.reload(true);
    }

    function counter() {
        guessCount += 1;
        console.log("The counter is now " + guessCount);
        $('#count').text(guessCount);
    }

    function mainFeedback(secret, origguess, newguess) {
        console.log("This is the original old guess " + origguess);
        var lastDiff = Math.abs(secret - origguess);
        console.log("The last difference was " + lastDiff);
        var newDiff = Math.abs(secret - newguess);
        console.log("The new difference is " + newDiff);
        if (newguess == secret) {
            $('#feedback').text("YOU GOT IT!");
            $('#userGuess').attr("disabled", true);
        } else if ((newDiff < lastDiff) || (newDiff == lastDiff)) {
            $('#feedback').text("warmer!");

        } else if (newDiff > lastDiff) {
            $('#feedback').text("colder");

        } else {
            console.log("error in comparing");
        }
    }

    function relativeFeedback() {

    }

    /*Call functions (triggered on button click)*/
    $('#guessButton').click(function () {
        intGuess = parseInt($('#userGuess').val(), 10);
        console.log("Your guess is " + intGuess);
        validation(intGuess);
        oldGuess = intGuess;
        console.log("This is the new old guess " + oldGuess);
    });


    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });

});

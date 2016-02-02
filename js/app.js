$(document).ready(function () {

    /*Declare global variables*/

    var answer = parseInt(Math.random() * 100);
    console.log(answer);
    var intGuess;
    var guessCount = 0;
    var oldGuess = 0;
    console.log(intGuess);

    /*Define functions*/

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
                relativeFeedback(answer, oldGuess, intGuess);
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
        var difference = Math.abs(secret - newguess);
        if (difference >= 50) {
            $('#feedback').text("Ice Cold!");
        } else if (difference <= 49 && difference >= 30) {
            $('#feedback').text("Cold!");
        } else if (difference <= 29 && difference >= 20) {
            $('#feedback').text("Warm");
        } else if (difference <= 20 && difference >= 10) {
            $('#feedback').text("Hot!");
        } else if (difference <= 9 && difference >= 1) {
            $('#feedback').text("Very Hot!!");
        } else {
            $('#feedback').text("YOU WON!");
            $('#userGuess').attr("disabled", true);;
        }
    }

    function relativeFeedback(secret, origguess, newguess) {
        var lastDiff = Math.abs(secret - origguess);
        var newDiff = Math.abs(secret - newguess);
        if (secret == newguess) {
            $('#relative-feedback').text("WOOOHOOO!");
            $('#userGuess').attr("placeholder", "You Got It!");
        } else if (newDiff < lastDiff) {
            $('#relative-feedback').text("You're warmer than your last guess.");

        } else if (newDiff > lastDiff) {
            $('#relative-feedback').text("You're colder than your last guess.");

        } else { // assumes newDiff == lastDiff
            $('#relative-feedback').text("Your guess is just as far as the last one.");
        }
    }

    /*Call functions (triggered on button click)*/

    $('#guessButton').click(function () {
        intGuess = parseInt($('#userGuess').val(), 10);
        console.log("Your guess is " + intGuess);
        validation(intGuess);
        oldGuess = intGuess;
    });

    $('#userGuess').on('keypress', function (event) {
        if (event.which === 13) {
            event.preventDefault();
            intGuess = parseInt($('#userGuess').val(), 10);
            console.log("Your guess is " + intGuess);
            validation(intGuess);
            oldGuess = intGuess;
        }
    });

    $('.new').click(function () {
        newGame();
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

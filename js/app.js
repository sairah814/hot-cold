$(document).ready(function () {

    //define computer's guess on page load
    //turn user's guess into int (once they hit Guess!) and compare to computer's guess
    //return whether guess is hot or cold (first guess should always be hot?), subsequent guesses compare to user's previous guess
    //once user guesses, say you won
    //count number of guesses
    //clicking on new game reloads page

    /*Declare global variables*/
    var answer = parseInt(Math.random() * 100);
    var intGuess = parseInt($('#userGuess').val(), 10);
    var guessCount = 0;
    console.log(intGuess);

    /*Define functions*/
    function validation() {
        $('#guessButton').click(function () {
            console.log(intGuess);
            if (intGuess < 1 || intGuess > 100) {
                console.log("This is not a valid entry.");
            }

        });
    }

    function counter() {
        guessCount += 1;
        console.log(guessCount);
        $('#count').text(guessCount);
    }

    function compare() {

    }

    /*Call functions*/
    validation();

    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });

});

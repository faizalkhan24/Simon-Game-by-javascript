$(document).ready(function () {

    var buttonColours = ["red", "blue", "green", "yellow"];
    var gamePattern = [];
    var userClickedPattern = [];
    var level = 0;
    var started = false;

    if (!started) {

        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }

    $(".btn").on("click", function () {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length - 1);

        return console.log(userClickedPattern);

    });

    function nextSequence(event) {
        userClickedPattern = [];

        level++;
        $("#level-title").text("Level " + level);

        var randomnumber = Math.floor(Math.random() * 4);
        var randomChosenColour = buttonColours[randomnumber];
        gamePattern.push(randomChosenColour);

        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);


    }
    nextSequence();

    function checkAnswer(currentLevel) {
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
            console.log("right");
            if (userClickedPattern.length === gamePattern.length) {
                setTimeout(function () {
                    nextSequence();
                }, 1000);
            }
        } else {

            console.log("wrong");

        }
    }


    function playSound(name) {
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
    }

    function animatePress(currentColour) {
        $("#" + currentColour).addClass("pressed");
        setTimeout(() => {
            $("#" + currentColour).removeClass("pressed");

        }, 100);;
    }

});
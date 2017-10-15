

// game will start when you select the "start" button on the center of the page.
// After start is pressed it will reveal the questions and the timer starts.
// User reads through questions and answers them selecting radio buttons.
// After time is up program goes through and adds up right and wrong answers from array of questions and corresponding answers.

// questions and answers



// QUESTION AND ANSWER OBJECT


function checkAnswers() {

    var correct = 0;
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;

    if (question1 == "Providence") {
        correct++;
    }
    if (question2 == "Hartford") {
        correct++;
    }
    if (question3 == "Albany") {
        correct++;
    }

    var messages = ["You killed it, son!", "You did ok...", "You suck!"];

    var range;

    if (correct < 1) {
        range = 2;
    }

    if (correct > 0 && correct < 3) {
        range = 1
    }

    if (correct > 2) {
        range = 0;
    }

    document.getElementById("on-submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number-correct").innerHTML = "You got " + correct + " correct!";
}



// var timer2 = "1:01";
// var interval = setInterval(function () {


//     var timer = timer2.split(':');
//     var minutes = parseInt(timer[0], 10);
//     var seconds = parseInt(timer[1], 10);
//     --seconds;
//     minutes = (seconds < 0) ? --minutes : minutes;
//     if (minutes < 0) clearInterval(interval);

//     seconds = (seconds < 0) ? 59 : seconds;
//     seconds = (seconds < 10) ? '0' + seconds : seconds;
//     $('.countdown').html(minutes + ':' + seconds);
//     timer2 = minutes + ':' + seconds;
// }, 1000);


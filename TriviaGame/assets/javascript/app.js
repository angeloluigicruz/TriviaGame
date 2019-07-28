// Variables

var seconds = 30;

var interval;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

// 7 questions and 7 answers
var questions = [{
    question: "What is the most expensive type of sushi?",
    answerList: ["Salmon", "Uni", "Bluefin Tuna", "Ahi Tuna"],
    answer: 2
},{
    question: "How many years of training to become a sushi chef in Japan?",
    answerList: ["3", "7", "10", "12"],
    answer: 2
},{
    question: "What City is known to have the best sushi outside of Japan?",
    answerList: ["San Diego", "New York City", "San Francisco", "Toronto"],
    answer: 1
},{
    question: "When is International Sushi Day?",
    answerList: ["January 15", "February 28", "June 18", "November 30"],
    answer: 2
},{
    question: "Where is the most expensive sushi in the world sold??",
    answerList: ["US (Malibu)", "US (Honolulu)", "Japan (Osaka)", "Philippines (Manila)"],
    answer: 3
},{
    question: "What is the traditional way of eating sushi?",
    answerList: ["Chopsticks", "Fingers", "Fork", "Kebab"],
    answer: 1
},{
    question: "In Japan, what drink is served with sushi?",
    answerList: ["Sapporo Beer", "Sake", "Green Tea" , "Iced Water"],
    answer: 2
}];

$("#start").on("click", function() {

    // Hide start button
    $(this).hide();

    // Display time remaining countdown
    $("#remaining").html("<h2>Remaining: 30 Seconds</h2>");

    // Start countdown
    run();
   
    // Question 1
    $("#q1").html("<h3>" + questions[0].question + "</h3>");
    $("#a1").html("<input type='radio' name='a1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
        + "<input type='radio' name='a1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
        + "<input type='radio' name='a1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
        + "<input type='radio' name='a1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
    );

    // Question 2
    $("#q2").html("<h3>" + questions[1].question + "</h3>");
    $("#a2").html("<input type='radio' name='a2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
        + "<input type='radio' name='a2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
        + "<input type='radio' name='a2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
        + "<input type='radio' name='a2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
    );

    // Question 3
    $("#q3").html("<h3>" + questions[2].question + "</h3>");
    $("#a3").html("<input type='radio' name='a3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
        + "<input type='radio' name='a3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
        + "<input type='radio' name='a3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
        + "<input type='radio' name='a3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
    );

    // Question 4
    $("#q4").html("<h3>" + questions[3].question + "</h3>");
    $("#a4").html("<input type='radio' name='a4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
        + "<input type='radio' name='a4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
        + "<input type='radio' name='a4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
        + "<input type='radio' name='a4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
    );

    // Question 5
    $("#q5").html("<h3>" + questions[4].question + "</h3>");
    $("#a5").html("<input type='radio' name='a5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
        + "<input type='radio' name='a5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
        + "<input type='radio' name='a5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
        + "<input type='radio' name='a5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
    );
    // Question 6
    $("#q6").html("<h3>" + questions[5].question + "</h3>");
    $("#a6").html("<input type='radio' name='a6' value='0'>" + "<label>" + questions[5].answerList[0] + "</label>"
        + "<input type='radio' name='a6' value='1'>" + "<label>" + questions[5].answerList[1] + "</label>"
        + "<input type='radio' name='a6' value='2'>" + "<label>" + questions[5].answerList[2] + "</label>"
        + "<input type='radio' name='a6' value='3'>" + "<label>" + questions[5].answerList[3] + "</label><br><br>"
    );
    // Question 7
    $("#q7").html("<h3>" + questions[6].question + "</h3>");
    $("#a7").html("<input type='radio' name='a7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label>"
        + "<input type='radio' name='a7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label>"
        + "<input type='radio' name='a7' value='2'>" + "<label>" + questions[6].answerList[2] + "</label>"
        + "<input type='radio' name='a7' value='3'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
    );

    // Submit button
    $("#submit").html("<button id='done' class='btn'>Done</button>");

    // Click event runs keepingScore and displayResults when user clicks Done button
    $("#done").on("click", function() {

        // Keep track of score (correct, incorrect, and unanswered)
        keepingScore();

        // Display 
        displayResults();
        
    });
});

// Function for time remaining countdown
function run() {

    clearInterval(interval);
    interval = setInterval(decrement, 1000);
}


function decrement() {

    //  Decrease seconds by one.
    seconds--;

    //  Show the seconds in the #remaining tag
    $("#remaining").html("<h2>Remaining: " + seconds + " Seconds</h2>" + "<br>");

    if (seconds === 0) {

        // Run stop function to stop remaining countdown
        stop();

        keepingScore();
        displayResults();

    }
}

function stop() {

    //  Clears interval
    clearInterval(interval);
}

// Function to display results if correct, incorrect, or unanswered 
function displayResults() {

    $("#remaining").hide();
    $("#q1").hide();
    $("#a1").hide();
    $("#q2").hide();
    $("#a2").hide();
    $("#q3").hide();
    $("#a3").hide();
    $("#q4").hide();
    $("#a4").hide();
    $("#q5").hide();
    $("#a5").hide();
    $("#q6").hide();
    $("#a6").hide();
    $("#q7").hide();
    $("#a7").hide();
    $("#submit").hide();

    $("#resultsMessage").html("<h3>You have finished!</h3>");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
}

// Function keeps score iff correct, incorrect, and unanswered
function keepingScore() {

    var usera1 = $("input[name='a1']:checked").val();
    var usera2 = $("input[name='a2']:checked").val();
    var usera3 = $("input[name='a3']:checked").val();
    var usera4 = $("input[name='a4']:checked").val();
    var usera5 = $("input[name='a5']:checked").val();
    var usera6 = $("input[name='a6']:checked").val();
    var usera7 = $("input[name='a7']:checked").val();

    // Question 1
    if (usera1 === undefined) {

        unanswered++;
    }
    else if (usera1 == questions[0].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 2
    if (usera2 === undefined) {

        unanswered++;
    }
    else if (usera2 == questions[1].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 3
    if (usera3 === undefined) {

        unanswered++;
    }
    else if (usera3 == questions[2].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 4
    if (usera4 === undefined) {

        unanswered++;
    }
    else if (usera4 == questions[3].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 5
    if (usera5 === undefined) {

        unanswered++;
    }
    else if (usera5 == questions[4].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 6
    if (usera6 === undefined) {

        unanswered++;
    }
    else if (usera6 == questions[5].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 7
    if (usera7 === undefined) {

        unanswered++;
    }
    else if (usera7 == questions[6].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }  
}

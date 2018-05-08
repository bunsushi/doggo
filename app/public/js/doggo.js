$(document).ready(function () {

    var panel = $("#quiz-area");

    var questions = [{
        question: "I like to run around a lot and be outside.",
        answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    }, {
        question: "I prefer to be in the company of my fellow canines.",
        answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    }, {
        question: "I'd rather have a treat than a toy.",
        answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    }, {
        question: "You may know me by the name Cuddle Monster.",
        answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    }, {
        question: "I'm basically a couch potato.",
        answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    }, {
        question: "I'm really concerned about making my Human happy.",
        answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    }];

    function displayQuiz() {

        for (var i = 0; i < questions.length; i++) {
            var well = $("<div>");
            well.addClass("well");
            well.append("<h3>" + questions[i].question + "</h3>")
            panel.append(well);
            for (var j = 0; j < questions[i].answers.length; j++) {
                well.append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }

        panel.append("<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Submit</button>");
    };

    displayQuiz();

});
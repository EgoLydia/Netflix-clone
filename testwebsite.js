var myQuestion1 = document.getElementsByClassName("faq-quest1")[0]
var myAnswer1 = document.getElementsByClassName("faq-answer1")[0]

myQuestion1.addEventListener("click", myFunction)
var none = ""
function myFunction() {
    var display = myAnswer1.style.display;
    if (display == none) {
        myAnswer1.style.display = "block";
    } else {
        myAnswer1.style.display = none;
    }

}

var myQuestion2 = document.getElementsByClassName("faq-quest2")[0]
var myAnswer2 = document.getElementsByClassName("faq-answer2")[0]
myQuestion2.addEventListener("click", myFunction1)

function myFunction1() {
    var display = myAnswer2.style.display;
    if (display == none) {
        myAnswer2.style.display = "block";
    } else {
        myAnswer2.style.display = none;

    }

}

var myQuestion3 = document.getElementsByClassName("faq-quest3")[0]
var myAnswer3 = document.getElementsByClassName("faq-answer3")[0]
myQuestion3.addEventListener("click", myFunction2)

function myFunction2() {
    var display = myAnswer3.style.display;
    if (display == none) {
        myAnswer3.style.display = "block";
    } else {
        myAnswer3.style.display = none;

    }

}

var myQuestion4 = document.getElementsByClassName("faq-quest4")[0]
var myAnswer4 = document.getElementsByClassName("faq-answer4")[0]
myQuestion4.addEventListener("click", myFunction3)

function myFunction3() {
    var display = myAnswer4.style.display;
    if (display == none) {
        myAnswer4.style.display = "block";
    } else {
        myAnswer4.style.display = none;

    }

}


var myQuestion5 = document.getElementsByClassName("faq-quest5")[0]
var myAnswer5 = document.getElementsByClassName("faq-answer5")[0]
myQuestion5.addEventListener("click", myFunction4)

function myFunction4() {
    var display = myAnswer5.style.display;
    if (display == none) {
        myAnswer5.style.display = "block";
    } else {
        myAnswer5.style.display = none;

    }

}


var myQuestion6 = document.getElementsByClassName("faq-quest6")[0]
var myAnswer6 = document.getElementsByClassName("faq-answer6")[0]
myQuestion6.addEventListener("click", myFunction5)

function myFunction5() {
    var display = myAnswer6.style.display;
    if (display == none) {
        myAnswer6.style.display = "block";
    } else {
        myAnswer6.style.display = none;

    }

}
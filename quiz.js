//Cassie Williams 5/6/2019

"use strict"

//get users name with window prompt
var username = window.prompt("What is your name?");
var $ = function (id) { return document.getElementById(id); };
//question 1
function question1() {
    //if/else statement
    if (document.getElementById("a1").checked) {
        //window alert
        window.alert(username + ", you nailed it!");
        }
    else { 
        window.alert(username + ", try again!");
        }
    }
//event listener
document.getElementById("b1").addEventListener("click", question1, false);

//guessing game 
var entry;
var answer2 = 8; 
var game;

function game() {
do { 
    entry = prompt("Pick a number between 1 and 10");
    entry = parseInt(entry);
    if (entry < answer2) {
        alert("Hint: It's higher, " + username);
    } else if (entry > answer2) {
        alert("Hint: It's lower, " + username);
    } else if (entry == answer2) {
        window.alert("Spot on, " + username + "!"); } 
    } while (entry != answer2);
}
//question 2
function question2() {
    //if/else statement
    if (document.getElementById("a2").checked) {
        //window alert
        window.alert(username + ", you nailed it!");
        }
    else if (document.getElementById("a3").checked) { 
        window.alert(username + ", that's knot it!");
        }
    else {
        window.alert(username + ", not quite!");
        }
    }
//event listener
document.getElementById("b2").addEventListener("click", question2, false);

//question 3
//get by value
function question3() {
    var n1 = Number(document.getElementById("n1").value);  
    var n2 = Number(document.getElementById("n2").value); 
    var operator = document.getElementById("operation").value;
    var answer = document.getElementById("answer");
    var result = 0
    //switch
    switch (operator) {
        //operations
        case "add": result = n1 + n2; break;
        case "subtract": result = n1 - n2; break; 
        case "multiply": result = n1 * n2; break;
        case "divide": result = n1 / n2; break;
        case "modulus": result = n1 % n2; break;
    }
    //get by text content
    answer.textContent = result + " is your answer " + username + "!";
}

//question 4
   var toggle = function() {
        var link = this;
        var h2 = link.parentNode;
        var div = h2.nextElementSibling;
        console.log(div.className);
        if (div.className == "hide") {
            div.setAttribute("class", "show");
        } else {
            div.setAttribute("class", "hide");
        }
    };
    
    window.onload = function() {
        var faqs = document.getElementById("faqs");
        //get elements by tag name
        var linkElements = faqs.getElementsByTagName("a");
    
        //for loop with array
        for (var i = 0; i < linkElements.length; i++ ) {
            linkElements[i].onclick = toggle;
        }
        // preload images 
        var image1 = $("image1");
        var links = $("image_list").getElementsByTagName("a");
        var i, link, image, linkNode;
        for ( i = 0; i < links.length; i++ ) {
            linkNode = links[i];
            image = new Image();
            image.src = linkNode.href; }

        //can't get the preventDefault to work so screen will stop jumping
        linkNode.onclick = function(evt) {
            link = this;
            if (!evt) {
                evt = window.event;
            }
            if (evt.preventDefault) {
                evt.preventDefault();
            }
            else {
                evt.returnFalse = false;
            }
        }

        document.getElementById("b3").onclick = question3;

        document.getElementById("g2").onclick = game;
    };

// create the rollover event      
// attach mouseover and mouseout events for each image
image1.onmouseover = function() {
    image1.src = "images/moon2.jpg";
};
image1.onmouseout = function() {
   image1.src = "images/moon.jpg"; 
};

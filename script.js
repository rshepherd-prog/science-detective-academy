// SCIENCE DETECTIVE ACADEMY
// Case File 001: The Broken Beaker


let cluesFound = [];

let deductionLevel = 1;



// SCREEN MANAGEMENT

function showScreen(screenID){

    let screens = document.querySelectorAll(".screen");


    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    document.getElementById(screenID).classList.add("active");

}



// START GAME

function startGame(){

    showScreen("intro-screen");

}



// ENTER LAB

function beginInvestigation(){

    showScreen("investigation-screen");

}



// EVIDENCE DATABASE

const clues = {


footprints: {

title:"👣 Evidence #1: Muddy Footprints",

text:

"Specific evidence shows muddy footprints near the lab table."

},



beaker: {

title:"🧪 Evidence #2: Broken Beaker",

text:

"A beaker has fallen and shattered."

},



window: {

title:"🪟 Evidence #3: Open Window",

text:

"The window is open and weather conditions may have affected the room."

},



paw: {

title:"🐾 Evidence #4: Tiny Paw Prints",

text:

"Small paw prints are found near the equipment shelf."

}


};





// DISPLAY EVIDENCE

function showClue(clueName){

    let clue = clues[clueName];


    if(!cluesFound.includes(clueName)){

        cluesFound.push(clueName);

    }


    document.getElementById("clue-text").innerHTML =

    clue.title +

    "<br><br>" +

    clue.text;


}







// MOVE TO INDUCTIVE REPORT

function makeConclusion(){


    if(cluesFound.length < 3){


        document.getElementById("clue-text").innerHTML =


        "🕵️ Detective Pixel says:<br><br>" +

        "Find at least three clues before creating your reasoning report.";


        return;


    }



    showScreen("report-screen");


}







// STUDENT IDENTIFIES REASONING TYPE

function chooseReasoning(choice){


let feedback = document.getElementById("reasoning-feedback");



if(choice === "inductive"){


feedback.innerHTML =


"✅ Correct!<br><br>" +

"You used inductive reasoning because you started with specific evidence and created a likely explanation.<br><br>" +

"Your conclusion was reasonable, but new evidence could change it.";



setTimeout(function(){

    showScreen("cat-screen");

},3000);



}


else{


feedback.innerHTML =


"❌ Not quite!<br><br>" +

"Deductive reasoning starts with a rule and applies it to a specific situation.";


}


}







// CAT REVEAL

function showCatReveal(){

    showScreen("cat-screen");

}







// START DEDUCTION

function startDeduction(){

    showScreen("deduction-screen");

}







// DEDUCTIVE REASONING CHALLENGES


let currentChallenge = 0;


const deductionChallenges = [


{

title:"Challenge 1: Gravity",

text:

"RULE: All objects with mass are affected by gravity.<br><br>" +

"FACT: The broken beaker has mass.<br><br>" +

"What can you conclude?",

answers:[

"The beaker is affected by gravity.",

"Gravity caused the beaker to break."

],

correct:0

},



{

title:"Challenge 2: Biology",

text:

"RULE: All living things need energy to survive.<br><br>" +

"FACT: A squirrel is a living thing.<br><br>" +

"What can you conclude?",

answers:[

"The squirrel needs energy to survive.",

"The squirrel eats the same food as every animal."

],

correct:0

},



{

title:"Challenge 3: Chemistry",

text:

"RULE: Metals conduct electricity.<br><br>" +

"FACT: Copper is a metal.<br><br>" +

"What can you conclude?",

answers:[

"Copper conducts electricity.",

"Copper is the best conductor."

],

correct:0

}


];





function startDeduction(){

currentChallenge = 0;

loadChallenge();

showScreen("deduction-screen");

}





function loadChallenge(){


let challenge = deductionChallenges[currentChallenge];


document.getElementById("challenge-title").innerHTML =
challenge.title;


document.getElementById("challenge-text").innerHTML =
challenge.text;


let buttons = document.querySelectorAll("#deduction-screen button");


buttons[0].innerHTML = challenge.answers[0];

buttons[1].innerHTML = challenge.answers[1];


document.getElementById("logic-feedback").innerHTML="";


document.getElementById("next-button").style.display="none";


}





function deductionAnswer(answer){


let challenge = deductionChallenges[currentChallenge];


if(answer === challenge.correct){


document.getElementById("logic-feedback").innerHTML =

"✅ Correct! You applied a general rule to a specific example. That is deductive reasoning.";


document.getElementById("next-button").style.display="block";


}

else{


document.getElementById("logic-feedback").innerHTML =

"❌ Not quite. Deductive reasoning only allows conclusions directly supported by the rule.";


}


}





function nextChallenge(){


currentChallenge++;


if(currentChallenge < deductionChallenges.length){


loadChallenge();


}

else{


showScreen("deductive-screen");


}


}






// COMPLETE CASE

function finishCase(){


showScreen("ending-screen");


}

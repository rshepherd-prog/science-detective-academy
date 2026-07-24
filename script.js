// SCIENCE DETECTIVE ACADEMY
// Case File 001: The Broken Beaker


let cluesFound = [];

let currentChallenge = 0;


// SCREEN MANAGEMENT

function showScreen(screenID){

    let screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    let screen = document.getElementById(screenID);

    if(screen){

        screen.classList.add("active");

    }

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

title:"👣 Muddy Footprints",

text:"Muddy footprints lead toward the lab table."

},


beaker: {

title:"🧪 Broken Beaker",

text:"A glass beaker is shattered on the floor."

},


window: {

title:"🪟 Open Window",

text:"The classroom window is open during a storm."

},


paw: {

title:"🐾 Tiny Paw Prints",

text:"Small paw prints appear near the equipment shelf."

}

};



// SHOW CLUES

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




// MOVE TO REPORT

function makeConclusion(){


if(cluesFound.length < 3){


document.getElementById("clue-text").innerHTML =

"🕵️ Detective Pixel says:<br><br>" +

"Collect at least three clues first.";


return;


}


showScreen("report-screen");


}




// STUDENT CHOOSES EXPLANATION

function chooseExplanation(choice){

console.log("Student explanation:", choice);


// move to inductive reasoning lesson

showScreen("inductive-screen");


}




// CAT REVEAL

function showCatReveal(){

showScreen("cat-screen");

}




// START DEDUCTION

function startDeduction(){

currentChallenge = 0;

loadChallenge();

showScreen("deduction-screen");

}





// DEDUCTIVE QUESTIONS


const deductionChallenges = [

{

title:"Challenge 1: Gravity",

text:

"<strong>RULE:</strong> All objects with mass are affected by gravity.<br><br>" +

"<strong>FACT:</strong> The beaker has mass.<br><br>" +

"What can you conclude?",

answers:[

"The beaker is affected by gravity.",

"Gravity caused the beaker to break."

],

correct:0,

notebook:

"Notebook Question: Explain why this is deductive reasoning."

},


{

title:"Challenge 2: Biology",

text:

"<strong>RULE:</strong> All living things need energy.<br><br>" +

"<strong>FACT:</strong> A squirrel is living.<br><br>" +

"What can you conclude?",

answers:[

"The squirrel needs energy.",

"The squirrel eats the same food as every animal."

],

correct:0,

notebook:
"Notebook Question: Describe the rule you started with and how it helped you reach a conclusion."

},


{

title:"Challenge 3: Chemistry",

text:

"<strong>RULE:</strong> Metals conduct electricity.<br><br>" +

"<strong>FACT:</strong> Copper is a metal.<br><br>" +

"What can you conclude?",

answers:[

"Copper conducts electricity.",

"Copper is the strongest conductor."

],

correct:0,

notebook:
"Notebook Question: Explain why this conclusion is based on logic rather than a guess."

}

];





function loadChallenge(){


let challenge = deductionChallenges[currentChallenge];


document.getElementById("challenge-title").innerHTML = challenge.title;


document.getElementById("challenge-text").innerHTML = challenge.text;


document.getElementById("answer-one").innerHTML = challenge.answers[0];


document.getElementById("answer-two").innerHTML = challenge.answers[1];


document.getElementById("logic-feedback").innerHTML = "";


document.getElementById("notebook-box").style.display="none";


}





function deductionAnswer(answer){


let challenge = deductionChallenges[currentChallenge];


if(answer === challenge.correct){


document.getElementById("logic-feedback").innerHTML =

"✅ Correct! You started with a general rule and applied it to a specific situation. That is deductive reasoning.";


document.getElementById("notebook-question").innerHTML = challenge.notebook;


document.getElementById("notebook-box").style.display="block";


}

else{


document.getElementById("logic-feedback").innerHTML =

"❌ Try again. Deductive reasoning begins with a general rule.";


}


}




function continueChallenge(){


currentChallenge++;


if(currentChallenge < deductionChallenges.length){


loadChallenge();


}

else{


showScreen("ending-screen");


}


}





function finishCase(){

showScreen("ending-screen");

}

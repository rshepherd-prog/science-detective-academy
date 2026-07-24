// SCIENCE DETECTIVE ACADEMY
// Case File 001: The Broken Beaker


let cluesFound = [];

let studentExplanation = "";

let currentChallenge = 0;



// SCREEN MANAGEMENT

function showScreen(screenID){

    let screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    let target = document.getElementById(screenID);

    if(target){

        target.classList.add("active");

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

title:"👣 Evidence #1: Muddy Footprints",

text:"Muddy footprints lead toward the lab table."

},



beaker: {

title:"🧪 Evidence #2: Broken Beaker",

text:"A glass beaker is shattered on the floor."

},



window: {

title:"🪟 Evidence #3: Open Window",

text:"The classroom window is open during a storm."

},



paw: {

title:"🐾 Evidence #4: Tiny Paw Prints",

text:"Small paw prints appear near the equipment shelf."

}


};







// DISPLAY CLUE

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







// MOVE TO EXPLANATION

function makeConclusion(){


if(cluesFound.length < 3){


document.getElementById("clue-text").innerHTML =

"🕵️ Detective Pixel says:<br><br>" +

"Collect at least three clues before making your explanation.";


return;

}



showScreen("report-screen");


}








// STUDENT CHOOSES WHAT HAPPENED

function chooseExplanation(choice){

    alert("Button clicked: " + choice);

}



let message = document.getElementById("reasoning-feedback");


if(message){


message.innerHTML =

"Good detective work! Now identify the type of reasoning you used.";


}



}








// STUDENT IDENTIFIES REASONING TYPE

function chooseReasoning(choice){


let feedback = document.getElementById("reasoning-feedback");



if(choice === "inductive"){


feedback.innerHTML =

"✅ Correct!<br><br>" +

"You used inductive reasoning because you started with specific evidence and created a possible explanation.<br><br>" +

"Your conclusion is likely, but it is not guaranteed.";



setTimeout(function(){

showScreen("cat-screen");

},3000);



}


else{


feedback.innerHTML =

"❌ Not quite!<br><br>" +

"You started with evidence and created an explanation. That is inductive reasoning, not deductive reasoning.";


}


}








// CAT REVEAL

function showCatReveal(){

showScreen("cat-screen");

}







// DEDUCTION LAB


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

notebook:"Explain why this is deductive reasoning."

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

notebook:"How did you move from a general rule to a specific conclusion?"

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

notebook:"Why is this logic instead of guessing?"

}

];







function startDeduction(){

currentChallenge = 0;

loadChallenge();

showScreen("deduction-screen");

}







function loadChallenge(){


let challenge = deductionChallenges[currentChallenge];


document.getElementById("challenge-title").innerHTML = challenge.title;


document.getElementById("challenge-text").innerHTML = challenge.text;


document.getElementById("answer-one").innerHTML = challenge.answers[0];


document.getElementById("answer-two").innerHTML = challenge.answers[1];


document.getElementById("logic-feedback").innerHTML = "";


if(document.getElementById("notebook-box")){

document.getElementById("notebook-box").style.display="none";

}


}







function deductionAnswer(answer){


let challenge = deductionChallenges[currentChallenge];


if(answer === challenge.correct){


document.getElementById("logic-feedback").innerHTML =

"✅ Correct! You started with a general rule and applied it to a specific example. This is deductive reasoning.";


document.getElementById("notebook-question").innerHTML = challenge.notebook;


document.getElementById("notebook-box").style.display="block";


}


else{


document.getElementById("logic-feedback").innerHTML =

"❌ Try again. Deductive reasoning starts with a general rule.";


}


}







function continueChallenge(){


currentChallenge++;


if(currentChallenge < deductionChallenges.length){

loadChallenge();

}

else{

showScreen("deductive-screen");

}


}







// FINISH

function finishCase(){

showScreen("ending-screen");

}

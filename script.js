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

    "Muddy footprints appear near the lab table."

},



beaker: {

    title:"🧪 Evidence #2: Broken Beaker",

    text:

    "A glass beaker is shattered on the floor."

},



window: {

    title:"🪟 Evidence #3: Open Window",

    text:

    "The classroom window is open during a storm."

},



paw: {

    title:"🐾 Evidence #4: Tiny Paw Prints",

    text:

    "Small paw prints appear near the equipment shelf."

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








// MOVE TO REASONING REPORT

function makeConclusion(){


    if(cluesFound.length < 3){


        document.getElementById("clue-text").innerHTML =


        "🕵️ Detective Pixel says:<br><br>" +

        "Find at least three clues before creating your report.";


        return;

    }



    showScreen("report-screen");


}







// INDUCTIVE REASONING CHECK

function chooseReasoning(choice){


let feedback = document.getElementById("reasoning-feedback");



if(choice === "inductive"){


feedback.innerHTML =


"✅ Correct!<br><br>" +

"You used inductive reasoning because you used specific evidence to create a likely explanation.<br><br>" +

"Your conclusion was reasonable, but it was not guaranteed.";



setTimeout(function(){

showScreen("cat-screen");

},3000);



}


else{


feedback.innerHTML =


"❌ Not quite.<br><br>" +

"Deductive reasoning starts with a rule and applies it to a specific case.";


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

"<strong>FACT:</strong> The broken beaker has mass.<br><br>" +

"What conclusion can you make?",

answers:[

"The beaker is affected by gravity.",

"Gravity caused the beaker to break."

],

correct:0,

notebook:

"Explain why this is deductive reasoning."

},



{

title:"Challenge 2: Biology",

text:

"<strong>RULE:</strong> All living things need energy to survive.<br><br>" +

"<strong>FACT:</strong> A squirrel is living.<br><br>" +

"What conclusion can you make?",

answers:[

"The squirrel needs energy to survive.",

"The squirrel eats the same food as every animal."

],

correct:0,

notebook:

"Explain how you moved from a general rule to a specific conclusion."

},



{

title:"Challenge 3: Chemistry",

text:

"<strong>RULE:</strong> Metals conduct electricity.<br><br>" +

"<strong>FACT:</strong> Copper is a metal.<br><br>" +

"What conclusion can you make?",

answers:[

"Copper conducts electricity.",

"Copper is the strongest conductor."

],

correct:0,

notebook:

"Why is this reasoning based on logic instead of guessing?"

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


document.getElementById("answer-one").innerHTML =
challenge.answers[0];


document.getElementById("answer-two").innerHTML =
challenge.answers[1];


document.getElementById("logic-feedback").innerHTML="";


document.getElementById("notebook-box").style.display="none";


}







function deductionAnswer(answer){


let challenge = deductionChallenges[currentChallenge];


if(answer === challenge.correct){


document.getElementById("logic-feedback").innerHTML =


"✅ Correct! You started with a rule and applied it to a specific example. This is deductive reasoning.";



document.getElementById("notebook-question").innerHTML =

challenge.notebook;



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







// FINISH CASE

function finishCase(){


showScreen("ending-screen");


}

// OLD BUTTON COMPATIBILITY FIX

function chooseExplanation(choice){

    chooseReasoning("inductive");

}

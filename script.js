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


function checkDeduction(correct){


let feedback = document.getElementById("logic-feedback");



if(correct){


feedback.innerHTML =

"✅ Correct!<br><br>" +

"You started with a general rule and applied it to a specific example. This is deductive reasoning.";



}


else{


feedback.innerHTML =

"❌ Not quite.<br><br>" +

"Deductive reasoning only allows conclusions supported by the rule.";


}



}








// COMPLETE CASE

function finishCase(){


showScreen("ending-screen");


}

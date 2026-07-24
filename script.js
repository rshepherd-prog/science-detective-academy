// SCIENCE DETECTIVE ACADEMY
// Case File 001: The Broken Beaker


let cluesFound = [];




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

        "<strong>Observation:</strong><br>" +

        "Muddy footprints lead toward the lab table.<br><br>" +

        "<strong>What we know:</strong><br>" +

        "Something with muddy feet was in the area.<br><br>" +

        "<strong>Possible inference:</strong><br>" +

        "Someone may have been near the beaker."

    },





    beaker: {

        title:"🧪 Evidence #2: Broken Beaker",

        text:

        "<strong>Observation:</strong><br>" +

        "A glass beaker is shattered on the floor.<br><br>" +

        "<strong>What we know:</strong><br>" +

        "The beaker broke, but we do not know why.<br><br>" +

        "<strong>Possible inference:</strong><br>" +

        "Something caused the beaker to fall."

    },





    window: {

        title:"🪟 Evidence #3: Open Window",

        text:

        "<strong>Observation:</strong><br>" +

        "The classroom window is open and rain is visible outside.<br><br>" +

        "<strong>What we know:</strong><br>" +

        "Wind and water could enter the classroom.<br><br>" +

        "<strong>Possible inference:</strong><br>" +

        "Weather may have affected the situation."

    },





    paw: {

        title:"🐾 Evidence #4: Tiny Paw Prints",

        text:

        "<strong>Observation:</strong><br>" +

        "Small paw prints appear near the shelf.<br><br>" +

        "<strong>What we know:</strong><br>" +

        "The prints are smaller than a human shoe.<br><br>" +

        "<strong>Possible inference:</strong><br>" +

        "An animal may have been nearby."

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








// MOVE TO REPORT


function makeConclusion(){


    if(cluesFound.length < 3){


        document.getElementById("clue-text").innerHTML =


        "🕵️ Detective Pixel says:<br><br>" +

        "Collect at least three pieces of evidence before writing your report.";


        return;


    }



    showScreen("report-screen");


}









// STUDENT CHOOSES EXPLANATION


function chooseExplanation(choice){


    showScreen("inductive-screen");


}









// CAT REVEAL


function showCatReveal(){


    showScreen("cat-screen");


}









// START DEDUCTION


function startDeduction(){


    showScreen("deduction-screen");


}









// DEDUCTION QUESTION


function deductionQuestion(correct){



    if(correct){


        showScreen("deductive-screen");


    }


    else{


        alert(

        "Not quite, detective!\n\n" +

        "Deductive reasoning applies the rule exactly.\n\n" +

        "The rule tells us the beaker is affected by gravity, not why it broke."

        );


    }



}









// COMPLETE CASE


function finishCase(){


    showScreen("ending-screen");


}

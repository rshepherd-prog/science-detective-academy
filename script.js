// SCIENCE DETECTIVE ACADEMY
// Case 001: The Broken Beaker


let cluesFound = [];


// Switch screens

function showScreen(screenID){

    let screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    document.getElementById(screenID).classList.add("active");

}



// Start Game

function startGame(){

    showScreen("intro-screen");

}



// Begin Investigation

function beginInvestigation(){

    showScreen("investigation-screen");

}


// Evidence database

const clues = {


    footprints: {

        title:"👣 Muddy Footprints",

        text:
        "Observation: Muddy footprints lead from the doorway toward the lab table.\n\n" +
        "Possible idea: Someone who was outside may have entered the room."

    },


    puddle: {

        title:"💧 Water Puddle",

        text:
        "Observation: A small puddle of water is near the broken beaker.\n\n" +
        "Possible idea: The water may have caused someone to slip."

    },


    window: {

        title:"🪟 Open Window",

        text:
        "Observation: The classroom window is open.\n\n" +
        "Possible idea: Rain or wind could have entered the room."

    },


    beaker: {

        title:"🧪 Broken Beaker",

        text:
        "Observation: The glass beaker shattered on the floor.\n\n" +
        "Possible idea: Someone may have knocked it over."

    }

};




// Show clue

function showClue(clueName){


    let clue = clues[clueName];


    if(!cluesFound.includes(clueName)){

        cluesFound.push(clueName);

    }


    document.getElementById("clue-text").innerHTML =

        "<strong>" +
        clue.title +
        "</strong><br><br>" +

        clue.text.replace(/\n/g,"<br>");


}



// Make conclusion

function makeConclusion(){


    if(cluesFound.length < 3){

        document.getElementById("clue-text").innerHTML =

        "Detective Pixel says:<br><br>" +

        "Hold on, rookie! A good detective collects more evidence before making a conclusion.";

        return;

    }


    showScreen("reasoning-screen");


}



// Deductive reasoning

function startDeduction(){

    showScreen("deduction-screen");

}




function deductionAnswer(correct){


    if(correct){

        showScreen("ending-screen");

    }

    else{


        alert(

        "Not quite!\n\n" +

        "The evidence only proves Jordan left footprints.\n\n" +

        "It does NOT prove Jordan broke the beaker."

        );


    }


}

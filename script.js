// SCIENCE DETECTIVE ACADEMY
// Case 001: The Broken Beaker


let cluesFound = [];


// Switch between screens

function showScreen(screenID){

    let screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    document.getElementById(screenID).classList.add("active");

}



// Start the game

function startGame(){

    showScreen("intro-screen");

}



// Move to evidence board

function beginInvestigation(){

    showScreen("investigation-screen");

}



// Evidence database

const clues = {


    footprints: {

        title:"👣 Evidence #1: Muddy Footprints",

        text:

        "<strong>Observation:</strong><br>" +
        "Muddy footprints are found leading toward the lab table.<br><br>" +

        "<strong>What we know:</strong><br>" +
        "Someone or something with muddy feet was in this area.<br><br>" +

        "<strong>Possible inference:</strong><br>" +
        "The person or animal that made these prints may have been near the beaker."

    },



    beaker: {

        title:"🧪 Evidence #2: Broken Beaker",

        text:

        "<strong>Observation:</strong><br>" +
        "A glass beaker is shattered on the floor.<br><br>" +

        "<strong>What we know:</strong><br>" +
        "The beaker broke, but we do not know what caused it.<br><br>" +

        "<strong>Possible inference:</strong><br>" +
        "Something may have caused the beaker to fall."

    },



    window: {

        title:"🪟 Evidence #3: Open Window",

        text:

        "<strong>Observation:</strong><br>" +
        "The classroom window is open and rain is visible outside.<br><br>" +

        "<strong>What we know:</strong><br>" +
        "Wind and water could enter the classroom.<br><br>" +

        "<strong>Possible inference:</strong><br>" +
        "Weather may have influenced what happened."

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





// Show evidence when clicked

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




// Submit investigation

function makeConclusion(){


    if(cluesFound.length < 3){


        document.getElementById("clue-text").innerHTML =

        "🕵️ Detective Pixel says:<br><br>" +

        "A good detective collects enough evidence before making a conclusion! Find at least 3 clues.";


        return;

    }



    showScreen("reasoning-screen");


}






// Deductive reasoning section

function startDeduction(){

    showScreen("deduction-screen");

}






function deductionAnswer(correct){


    if(correct){


        showScreen("ending-screen");


    }

    else{


        alert(

        "Not quite, detective! A conclusion must match the rule provided.\n\n" +

        "The evidence only proves the beaker fell. It does not prove someone broke it intentionally."

        );


    }


}

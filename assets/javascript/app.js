//VARIABLES
var topics = ["rabbits", "bunnies", "buster baxter", "judy hopps", "bugs bunny", 
"energizer bunny", "easter bunny", "cartoon bunny", "bunny ears", "white rabbit"]

//FUNCTIONS

function renderButtons() {
    //creates a var for the empty div for the buttons
    var buttonDiv = $("#gif-buttons-div");

    //Deletes content inside
    buttonDiv.empty();

    //loop through an array of topics and generate button for each topic
    for (var i=0; i<topics.length;i++){
        buttonDiv.append('<button type="button" class="btn btn-primary btn-sm" id="gif-button">' + topics[i] + '</button>'); 
    }
}

//MAIN APP
renderButtons();
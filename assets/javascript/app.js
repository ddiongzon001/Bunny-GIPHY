//VARIABLES
var topics = ["rabbits", "bunnies", "buster baxter", "judy hopps", "bugs bunny", 
"energizer bunny", "easter bunny", "cartoon bunny", "bunny ears", "white rabbit"]

//HTML VARIABLES
var buttonDiv = $("#gif-buttons-div");

//FUNCTIONS

function renderButtons() {

    //Deletes content inside button Div
    buttonDiv.empty();

    //loop through an array of topics and generate button for each topic
    for (var i=0; i<topics.length;i++){
        //creates the button
        var button = $("<button>");

        //adds bootstrap class
        button.addClass("btn btn-primary btn sm");
        
        //adds css style id
        button.attr("id", "gif-button");

        //adds data-attribute
        button.attr("data-name", topics[i]);

        //adds HTML text to button
        button.text(topics[i]);

        //adds button to HTML
        buttonDiv.append(button); 
    }
}

//MAIN APP
renderButtons();

//BUTTON CLICK FUNCTIONS
button.on('click', function(){
    //Deletes content inside button Div
    buttonDiv.empty();

    
})

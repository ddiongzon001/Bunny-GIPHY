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
//WHEN USER CLICKS ON RECOMMENDED BUTTONS
$(document).on('click', "#gif-button", function(){

    //testing out if anything clicks works
    alert("you click a button and it worked!");

    //pulls the data-attribute and stores it in a variable
    //NEED THE GIFPY LINK
    //AJAX CALL
    //DISLAY THE GIFS

    
})

//WHEN USER CLICKS ON SEARCH FUNCTIONS
//function to add the button to the button div
    //pulls the data-attribute and stores it in a variable
    //NEED THE GIFPY LINK
    //AJAX CALL
    //DISLAY THE GIFS



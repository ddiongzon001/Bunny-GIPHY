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

    //create a new variable that stores the data-attribute of the topic
    var topicName = $(this).data("name");
    
    //api key variable and queryURL variables
    var api = "SoRSlrz9spbXDknc99YFPDDvVZrNd9w9";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + api + "&q=" + topicName + "&limit=10";
    
    //AJAX CALL
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
    });
    //DISLAY THE GIFS

    
})

//WHEN USER CLICKS ON SEARCH FUNCTIONS
//function to add the button to the button div
    //pulls the data-attribute and stores it in a variable
    //NEED THE GIFPY LINK
    //AJAX CALL
    //DISLAY THE GIFS



//VARIABLES
var topics = ["rabbits", "bunnies", "buster baxter", "judy hopps", "bugs bunny",
    "energizer bunny", "easter bunny", "cartoon bunny", "bunny ears", "white rabbit"
]

//HTML VARIABLES
var buttonDiv = $("#gif-buttons-div");
var gifDiv = $("#gif-imgs-div");

//FUNCTIONS

function renderButtons() {

    //Deletes content inside button Div
    buttonDiv.empty();

    //loop through an array of topics and generate button for each topic
    for (var i = 0; i < topics.length; i++) {
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
$(document).on('click', "#gif-button", function () {

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

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            
            //creates div for both the rating and the image
            var div = $('<div>');
            div.addClass("col");
            
            // creates a p tage for the rating and sends it to the HTML page
            var p = $('<p>');
            p.text("Rating: " + results[i].rating);

            //creates the image tag and pulls the url for the gif from the response
            var bunnyImage = $("<img>");
            bunnyImage.addClass("bunnyGif")
            bunnyImage.attr("src", results[i].images.fixed_height_small_still.url);
            bunnyImage.attr("data-still", results[i].images.fixed_height_small_still.url);
            bunnyImage.attr("data-animate", results[i].images.fixed_height_small.url);
            bunnyImage.attr("data-state", "still");

            //appends the rating and the gif to a div
            div.append(p);
            div.append(bunnyImage);

            //prepends the div to the gifDiv in the HTML
            gifDiv.prepend(div);

        }
    });


})

//WHEN USER CLICKS ON SEARCH FUNCTIONS
$("#submit").on("click", function(event){
    // prevents default from being stored
    event.preventDefault();

    //grabs the text from the search bar into a variable
    var userTopic = $("#search-input").val();

    //removes the user's input from the search bar
    $("#search-input").val("");

    //push variable into the topics array
    topics.push(userTopic);

    renderButtons();
});

//when user clicks on gif; gif either animates or is still
$()
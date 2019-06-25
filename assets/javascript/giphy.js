var topics = ["sports", "emotions", "funny"];
renderButtons();
// Adding click event listen listener to all buttons
$("button").on("click", function () {
    // Grabbing and storing the data-animal property value from the button
    var animal = $(this).attr("data-animal");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=HrKpFnYYbogbZQ8BpFlOQr0MMkgG1yPI";

    //Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
});


function alertTopicName() {
    var topicName = $(this).attr("data-name");

    alert(topicName);
}

// Function for displaying movie data
function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#button-view").empty();

    // Looping through the array of movies
    console.log(topics);
    console.log(topics.length);
    for (var i = 0; i < topics.length; i++) {
console.log(topics[i]);
        // Then dynamicaly generating buttons for each movie in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)

        // Adding the button to the HTML
        var buttonChoice = $('<button>').attr({ type: 'button', class: 'topic', "data-name": topics[i] });
        buttonChoice.text(topics[i]);
        $("#buttons-view").append(buttonChoice);

console.log(buttonChoice);

    }
}

// This function handles events where one button is clicked
$("#add-topic").on("click", function (event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var topic = $("#topic-input").val().trim();
    // The movie from the textbox is then added to our array
    topics.push(topic);

    // calling renderButtons which handles the processing of our movie array

    $(document).on("click", ".movie", alertTopicName);
    renderButtons();
});

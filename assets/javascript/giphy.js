// Adding click event listen listener to all buttons
//$("button").on("click", function () {
    // Grabbing and storing the data-animal property value from the button
   /* var animal = $(this).attr("data-animal");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=HrKpFnYYbogbZQ8BpFlOQr0MMkgG1yPI";

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })*/
       
var topics = ["sports","emotions","funny"]
      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("topic");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-name", topics[i]);
          // Providing the button's text with a value of the movie at index i
          a.text(topics[i]);
          // Adding the button to the HTML
          $("#buttons-view").append(a);
          var buttonChoice = $('<button/>').attr({ type: 'button', class: 'topic', value: i });
          var buttonTopic = ["sports", "emotions", "funny"];
          buttonChoice.text(buttonTopic[i]);
          $("#ptrivia").append(buttonChoice);

          var b = $("<button>");
          b.addClass("emotions");
          b.attr("data-name", topics[i]);
          b.text(top)

        }
      }

      // This function handles events where one button is clicked
      $("#add-topic").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var topic = $("#topic-input").val().trim();
        // The movie from the textbox is then added to our array
        topics.push(topic);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

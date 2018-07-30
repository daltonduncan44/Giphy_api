$(document).ready(function(){
    console.log("ready to party")
/// start array to post to doc
var animalsArray = ["dog", "cat", "lizard", "monkey", "bird", "fish",];


    // Deleting the movies prior to adding new movies so buttons dont repeat
    function loadButtons() {
    $("#buttons").empty();
    
    // Looping through the array of movies
    for (var i = 0; i < animalsArray.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<a>");
        // Adding a class
        a.addClass("btn btn-info btn-sm button m-1 queryButton");
        // Added a data-attribute
        a.attr("data-name", animalsArray[i].replace(/\s+/g, '+'));
        // Added a data-attribute
        a.text(animalsArray[i]);
        // Added the button to the HTML
        $("#buttons").append(a);
        $("#newbuttons").val();
    }
    };

loadButtons();



});
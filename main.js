

//set array to have preset buttons
var topics = ["It","lion king","step brothers","spiderman", "iron man","top gun","happy gilmore"];
//set var to cap the number of gits
var numberOfGIFs = 10;
//set var to cap rating
var cutOffRating = "PG";
//"gQeBWleLEAwNNxxJTV5wnK0YZO6PK1lD"
// function to add buttons dynamically to dom
function makeButtons(){
	for(var i = 0; i < topics.length; i++) {
		var newButton = $("<button>");
		newButton.addClass("btn");
		newButton.addClass("newMovieButton");
		newButton.text(topics[i]);
		$("#button-container").append(newButton);
	}
	$(".newMovieButton").unbind("click");

	$(".newMovieButton").on("click", function(){
		$(".gif-image").unbind("click");
		$("#gif-container").empty();
		$("#gif-container").removeClass("dotted-border");
		getterGIFContainer($(this).text());
	});

}
// function to add new buttons to array
function addButton(movie){
	if(topics.indexOf(movie) === -1) {
		topics.push(movie);
		$("#button-container").empty();
		makeButtons();
	}
}
//go into the api get and set the info
function getterGIFContainer(movie){
	$.ajax({
		url: "https://api.giphy.com/v1/gifs/search?q=" + movie + 
		"&api_key=gQeBWleLEAwNNxxJTV5wnK0YZO6PK1lD&rating=" + cutOffRating + "&limit=" + numberOfGIFs,
		method: "GET"
	}).then(function(response){
		response.data.forEach(function(element){
			newDiv = $("<div>");
			newDiv.addClass("individual-gif-container");
			newDiv.append("<p>Rating: " + element.rating.toUpperCase() + "</p>");
			var newImage = $("<img src = '" + element.images.fixed_height_still.url + "'>");
			newImage.addClass("gif-image");
			newImage.attr("state", "still");
			newImage.attr("still-data", element.images.fixed_height_still.url);
			newImage.attr("animated-data", element.images.fixed_height.url);
			newDiv.append(newImage);
			$("#gif-container").append(newDiv);
		});
		// animate the giphs state on click
		$("#gif-container").addClass("dotted-border");
		$(".gif-image").unbind("click");
		$(".gif-image").on("click", function(){
			if($(this).attr("state") === "still") {
				$(this).attr("state", "animated");
				$(this).attr("src", $(this).attr("animated-data"));
			}
			else {
				$(this).attr("state", "still");
				$(this).attr("src", $(this).attr("still-data"));
			}
		});
	});
}
//function to run on screen open to set the stage with buttons and input box
$(document).ready(function(){
	makeButtons();
	$("#submit").on("click", function(){
		event.preventDefault();
		addButton($("#movies").val().trim());
		$("#movies").val("");
	});
});
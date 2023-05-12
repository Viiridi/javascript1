console.log("todo.js");
var compose = document.querySelector("#compose");
var directionsWrapper = document.querySelector("#directions-wrapper");
var directions = document.querySelector("#directions");

function todo(message) {
	// build the card for each TODO message
    var card = document.createElement("article");
    card.setAttribute("class", "card");
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    card.appendChild(checkBox);

	//pass in message
    card.innerHTML += message;

	//...
	// add delete button...
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "button");
    deleteButton.innerHTML = "DELETE";
    deleteButton.setAttribute("id", "deleteButton");

	// add event handler for delete INSIDE function
	deleteButton.addEventListener("click", function () {
		card.outerHTML = null;
	});

	// add delete button to the card
	card.appendChild(deleteButton);

	// add finished card to the DOM, after the directions/compose elements
	document.querySelector('body').appendChild(card);

	// OR add finished card to the DOM, BEFORE the directions/compose elements
	// so that the compose component travels down the list of TODOS to the bottom
	// document.querySelector("body").insertBefore(card, directionsWrapper);
} //end todo

// add event handling
directions.addEventListener("click", function () {
    console.log(compose.value)
	todo(compose.value);
});
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
	getDatabase,
	ref,
	push,
	onValue,
} from "https:///www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
const appSettings = {
	databaseURL:
		"https://grocery-app-e5557-default-rtdb.europe-west1.firebasedatabase.app/",
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");
const inputField = document.querySelector("#input-field");
const addButton = document.querySelector("#add-button");
const shoppingCard = document.querySelector("#shopping-card");

//function to clear input field
function clearInputField() {
	inputField.value = "";
}

//eventlistener on click of button to add item to list
addButton.addEventListener("click", function () {
	let inputValue = inputField.value;
	// clear input field after each button click
	clearInputField();
	//add inputValue to list
	appendListItem(inputValue);
	push(shoppingListInDB, inputValue);
});

//onValue function to get the shopping List object from the datatbase and convert it to an array
onValue(shoppingListInDB, function (snapshot) {
	const groceryList = Object.values(snapshot.val());
	console.log(groceryList);
});

// function to create unordered list adn append the list item to list.
function appendListItem(item) {
	const ul = document.createElement("ul");
	const listItem = document.createElement("li");
	listItem.textContent = `${item}`;
	ul.appendChild(listItem);
	return shoppingCard.appendChild(ul);
}

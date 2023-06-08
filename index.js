import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
	getDatabase,
	ref,
	push,
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

function clearInputField() {
	inputField.value = "";
}

addButton.addEventListener("click", function () {
	let inputValue = inputField.value;
	// clear input field after each button click
	clearInputField();
	//add inputValue to list
	appendListItem(inputValue);
	push(shoppingListInDB, inputValue);
});

function appendListItem(item) {
	const ul = document.createElement("ul");
	const listItem = document.createElement("li");
	listItem.textContent = `${item}`;
	ul.appendChild(listItem);
	return shoppingCard.appendChild(ul);
}

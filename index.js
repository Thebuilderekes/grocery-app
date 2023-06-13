import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
	getDatabase,
	ref,
	push,
	onValue,
	remove,
} from "https:///www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
const appSettings = {
	databaseURL:
		"https://grocery-app-e5557-default-rtdb.europe-west1.firebasedatabase.app/",
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");
const inputField = document.querySelector("#input-field");
const errorMessage = document.querySelector("span");
const addButton = document.querySelector("#add-button");

const shoppingList = document.querySelector("#shopping-list");
//function to clear input field
function clearInputField() {
	inputField.value = "";
}
function error(message) {
	return message;
}

//eventlistener on click of button to add item to list
addButton.addEventListener("click", function () {
	let inputValue = inputField.value;
	// clear input field after each button click
	clearInputField();
	//add inputValue to list database:
	if (inputValue.length > 0) {
		push(shoppingListInDB, inputValue);
		errorMessage.textContent = "";
	} else {
		errorMessage.textContent = `${error("Input cannot be empty")}`;
	}
});

//onValue function to get the groceryList array having both id and value from the datatbase.
//onValue allows the live update of the database in real time.
onValue(shoppingListInDB, function (snapshot) {
	//Check if there is an item in the shopping list
	if (snapshot.exists()) {
		const groceryListArray = Object.entries(snapshot.val());

		clearShoppingList();

		for (let i = 0; i < groceryListArray.length; i++) {
			let currentItem = groceryListArray[i];
			console.log(currentItem);
			// current item displays an array having two iems, the id and item text, to get the list to display only the item text, we get the current value from the array.
			let currentItemValue = currentItem[1];
			appendListItem(currentItem);
		}
	} else {
		shoppingList.textContent = "No items in cart yet...";
	}
});

//add item to shopping cart
function appendListItem(item) {
	let itemID = item[0];
	let itemValue = item[1];
	const shoppingListItem = document.createElement("li");
	shoppingListItem.textContent = `${itemValue}`;

	shoppingList.appendChild(shoppingListItem);
	shoppingListItem.addEventListener("click", function () {
		const exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);
		remove(exactLocationOfItemInDB);
	});
}

function clearShoppingList() {
	shoppingList.innerHTML = " ";
}

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
// const shoppingCart = document.querySelector("#shopping-cart");

const shoppingList = document.querySelector("#shopping-list");
//function to clear input field
function clearInputField() {
	inputField.value = "";
}

//eventlistener on click of button to add item to list
addButton.addEventListener("click", function () {
	let inputValue = inputField.value;
	// clear input field after each button click
	clearInputField();
	//add inputValue to list database:
	push(shoppingListInDB, inputValue);
});

//onValue function to get the shopping List object from the datatbase and convert it to an array
onValue(shoppingListInDB, function (snapshot) {
	const groceryListArray = Object.values(snapshot.val());
	shoppingList.innerHTML = " ";
	for (let i = 0; i < groceryListArray.length; i++) {
		appendListItem(groceryListArray[i]);
	}
});

//add item to shopping cart
function appendListItem(item) {
	shoppingList.innerHTML += `<li>${item}</li>`;
}

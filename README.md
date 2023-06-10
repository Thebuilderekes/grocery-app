# Grocery app

## Features

- An input field to accept item name
- Add button to add item to a list of grocery items

### How does it work?

This grocery app uses Firebase Realtime Database to create a grocery shopping list application.

First, I import the necessary Firebase modules using the URLs of their CDN. Then define an object `appSettings` that contains the URL of the Firebase Realtime Database.

It initializes the Firebase app with the `initializeApp` function and gets a reference to the database with the `getDatabase` function. It also creates a reference to the `shoppingList` node in the database using the `ref` function.

It then selects the HTML elements for the input field, add button, and shopping cart using the `querySelector` method.

The `clearInputField` function is defined to clear the input field after the user clicks the add button.

The `appendListItem` function creates a new unordered list element and list item element, sets the text content of the list item to the input value, and appends the list item to the unordered list. Finally, it appends the unordered list to the shopping cart on the HTML page and also stores it in the database.

An event listener is added to the add button using the `addEventListener` method. When the user clicks the add button, the value of the input field is stored in `inputValue` , the input field is cleared using `clearInputField` , and the `appendListItem ` function is called to add the item to the shopping list on the HTML page. The `push` function is also called to add the item to the `shoppingList` node in the database.

using onValue function:

1. The code uses the onValue method to listen for changes to the shoppingListInDB.
2. When there is a change, the function inside onValue is executed.
3. The function retrieves the value of the snapshot using snapshot.val().
4. The groceryList variable is assigned the values of the snapshot object using Object.values().
5. The groceryList is logged to the console using console.log()

## challenges that I faced and solution

I ran into an issue trying to get firebase URL to work with using the import keyword and I had error with ESM and identifying my file as a module. The solution was to attach `type = "module"` to the script tags.

# Grocery app

## Features

- An input field to accept item name
- Add button to add item to a list of grocery items

### How does it work?

This grocery app uses Firebase Realtime Database to create a grocery shopping list application.

First, I import the necessary Firebase modules using the URLs of their CDN. Then define an object `appSettings` that contains the URL of the Firebase Realtime Database.

It initializes the Firebase app with the `initializeApp` function and gets a reference to the database with the `getDatabase` function. It also creates a reference to the `shoppingList` node in the database using the `ref` function.

It then selects the HTML elements for the input field, add button, and shopping card using the `querySelector` method.

The `clearInputField` function is defined to clear the input field after the user clicks the add button.

An event listener is added to the add button using the `addEventListener` method. When the user clicks the add button, the value of the input field is stored in `inputValue` , the input field is cleared using `clearInputField` , and the `appendListItem ` function is called to add the item to the shopping list on the HTML page. The `push` function is also called to add the item to the `shoppingList` node in the database.

The `appendListItem` function creates a new unordered list element and list item element, sets the text content of the list item to the input value, and appends the list item to the unordered list. Finally, it appends the unordered list to the shopping card on the HTML page and also stores it in the database.

using onValue function we can get the

## challenges that I faced and solution

I ran into an issue trying to get firebase URL to work with using the import keyword and I had error with ESM and identifying my file as a module. The solution was to attach `type = "module"` to the script tags.

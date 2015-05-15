# jQuery Tic-Tac-Toe

## Contents

* About
* HTML
* JavaScript
* Running your server

## About

You must have a function called `attachlisteners()` which I call in the tests to attach the click handlers to the page after I've mocked up the DOM.

For reasons Katie and I couldn't figure out you must wrap your handler in an anonymous function and manually call the function that handles the event

```javascript
var attachListeners = function() {
  $("tbody").click(function(event) {
    doTurn(event)
  })
}
```

## HTML

The `index.html` page, when served, looks like this:

![tic-tac-toe board](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/js/jquery-tic-tac-toe-board)

The grid is made by a table. Each square is in a table row, or `tr` and each square is a table data, or `td` (you could also call this a cell). 

## JavaScript

* `attachListeners()`
  * When a client clicks on a cell, the function `doTurn()` should be called and passed a parameter of the event
* `doTurn()`
  * Increment the variable `turn` by one
  * Should call on the function `updateState()` and pass it the event
  * Should call on `checkForWinners()`
* `player()`
  * If the turn number is even, this function should return the string "X", else it should return the string "O"
* `updateState()`
  * This method should call on `player()` and add the return value of this function to the clicked cell on the table
* `checkWinner()`
  * This function should evaluate the board to see if anyone has won
  * If there is a winner, this function should make one of two strings: "Player X Won!" or "Player O Won!". It should then pass this string to `message()`.
* `message()`
  * This function should accept a string and add the string to the `div` with an id of "message" 

## Running Your Server

You can always run a Python server to see how your `index.html` behaves by running `python -m SimpleHTTPServer` from your terminal and visiting [http://localhost:8000](http://localhost:8000/).
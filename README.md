# jQuery Tic-Tac-Toe

## About

You must have a function called attachlisteners which I call in the tests to attach the click handlers to the page after I've mocked up the DOM.

For reasons Katie and I couldn't figure out you must wrap your handler in an anonymous function and manually call the function that handles the event

```javascript
var attachListeners = function() {
  $("tbody").click(function(event) {
    doTurn(event)
  })
}
```
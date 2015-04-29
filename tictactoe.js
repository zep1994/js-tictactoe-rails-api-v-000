var turn = 1;
var winningCombos = [[[0,0],[1,0],[2,0]], [[0,1],[1,1],[2,1]], [[0,2][1,2],[2,2]], [[0,0],[1,1],[2,2]], [[0,0],[0,1],[0,2]], [[2,0],[2,1],[2,2]], [[1,0],[1,1],[1,2]], [[2,0],[1,1],[0,2]]]
var checkCells = function(ary) {
  for(var i = 0; i < ary.length; i++) {
  	var x = ary[0];
  	var y = ary[1];
    var selector = $('[data-x="' + x + '"][data-y="' + y + '"]')
    if( cellMatch(selector)) {
      return false;
    }
  }
  return true;
}
var checkWinner = function() {
  for(var i = 0; i < winningCombos.length; i++) {
    if(checkCells(winningCombos[i]) == true) {
      return true;
    }
  }
  return false;
}

var player = function() {
	if(turn % 2 == 0) {
		return "X";
	}
	else {
		return "O";
	}
};
var cellMatch = function(element) {
	if(element.html() != player()) {
		return false;
	}
	else {
		return true;
	}
}
var rowMatch = function(selector) {
	var winner;
	$(selector).each(function(i, element) {
		winner = cellMatch($(element));
		if(winner == false) {
			return false;
		}
	})
	return winner;
}
var cellsCorrect = function(direction){
	for(var i = 1; i <= 3; i++) {
		var selector = 'td[data-' + direction + '="' + i + '"]'
		var winner = rowMatch(selector);
		if(winner == true) {
			return true;
		}
	}
	return false;
}
var checkWinner = function() {
	ary = ["x", "y"];
	for(var i = 0; i < ary.length; i++) {
		if(cellsCorrect(ary[i]) == true) {
			return true
		}
	}
	return false;
}
var checkDiagonalA = function() {
	for(var i = 1; i <= 3; i++) {
		var selectorX = 'td[data-x="' + i + '"]'
		var selectorY = 'td[data-y="' + i + '"]'
		cell = $(selectorX + selectorY)
		if(cell.html() != player()) {
			return false;
		}
	}
	return true;
}
var checkDiagonalB = function() {
	var x = 3
	for(var y = 1; y <= 3; y++) {
		var selectorX = 'td[data-x="' + x + '"]'
		var selectorY = 'td[data-y="' + y + '"]'
		cell = $(selectorX + selectorY)
		x = x - 1;
		if(cell.html() != player()) {
			return false;
		}
	}
	return true;
}
var won = function() {
	var fns = [checkDiagonalB, checkDiagonalA, checkWinner]
	for(var i = 0; i < fns.length; i++) {
		if(fns[i]() == true) {
			return true;
		}
	}
	return false;
};
$("td").each(function(i, row){
	$(row).click(function(){
		turn += 1;
		$(row).html(player());
		if(won()) {
			alert("you won!");
		}
	});
});
var turn = 1;
var winningCombos = [[[0,0],[1,0],[2,0]], [[0,1],[1,1],[2,1]], [[0,2],[1,2],[2,2]], [[0,0],[1,1],[2,2]], [[0,0],[0,1],[0,2]], [[2,0],[2,1],[2,2]], [[1,0],[1,1],[1,2]], [[2,0],[1,1],[0,2]]]
var checkCells = function(ary) {
  for(var i = 0; i < ary.length; i++) {
  	var winningCombo = ary[i];
  	var x = winningCombo[0];
  	var y = winningCombo[1];
    var selector = $('[data-x="' + x + '"][data-y="' + y + '"]')
    if( noCellMatch(selector)) {
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
var noCellMatch = function(element) {
	return (element.html() != player())
}

$("td").each(function(i, row){
	$(row).click(function(){
		turn += 1;
		$(row).html(player());
		if(checkWinner()) {
			alert("you won!");
		}
	});
});
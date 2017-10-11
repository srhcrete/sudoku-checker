function Checker(arr) {
  this.arr = arr;
}

var sudokuBoard = [
[],
[],
[],
[],
[],
[],
[],
[],
[]
];


Checker.prototype.sudokuRows = function(sudokuBoard) {
  var currentarr = [];
  var legal = true;
  sudokuBoard.forEach(function(element) {
    if (element.sort().join('') != '123456789') {
      return legal = false;
    }
  });

  for (var i=0; i < sudokuBoard.length; i++) {
    for (var j=0; j < sudokuBoard[i].length; j++) {
      currentarr.push(sudokuBoard[i][j]);
    }
    if (currentarr.sort().join('') != '123456789') {
      return legal = false;
    }
    var currentarr = [];
  }
  return legal;
};

exports.checkerModule = Checker;

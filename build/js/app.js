(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Checker = require('./../js/sudoku.js').checkerModule;

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    var userInput = [
      [$('r2s1').val(), $('r2s2').val(), $('r2s3').val(), $('r2s4').val(), $('r2s5').val(), $('r2s6').val(), $('r2s7').val(), $('r2s8').val(), $('r2s9').val()],
      [$('r2s1').val(), $('r2s2').val(), $('r2s3').val(), $('r2s4').val(), $('r2s5').val(), $('r2s6').val(), $('r2s7').val(), $('r2s8').val(), $('r2s9').val()],
      [$('r3s1').val(), $('r3s2').val(), $('r3s3').val(), $('r3s4').val(), $('r3s5').val(), $('r3s6').val(), $('r3s7').val(), $('r3s8').val(), $('r3s9').val()],
      [$('r4s1').val(), $('r4s2').val(), $('r4s3').val(), $('r4s4').val(), $('r4s5').val(), $('r4s6').val(), $('r4s7').val(), $('r4s8').val(), $('r4s9').val()],
      [$('r5s1').val(), $('r5s2').val(), $('r5s3').val(), $('r5s4').val(), $('r5s5').val(), $('r5s6').val(), $('r5s7').val(), $('r5s8').val(), $('r5s9').val()],
      [$('r6s1').val(), $('r6s2').val(), $('r6s3').val(), $('r6s4').val(), $('r6s5').val(), $('r6s6').val(), $('r6s7').val(), $('r6s8').val(), $('r6s9').val()],
      [$('r7s1').val(), $('r7s2').val(), $('r7s3').val(), $('r7s4').val(), $('r7s5').val(), $('r7s6').val(), $('r7s7').val(), $('r7s8').val(), $('r7s9').val()],
      [$('r8s1').val(), $('r8s2').val(), $('r8s3').val(), $('r8s4').val(), $('r8s5').val(), $('r8s6').val(), $('r8s7').val(), $('r8s8').val(), $('r8s9').val()],
      [$('r9s1').val(), $('r9s2').val(), $('r9s3').val(), $('r9s4').val(), $('r9s5').val(), $('r9s6').val(), $('r9s7').val(), $('r9s8').val(), $('r9s9').val()]];
    console.log(userInput);
    var checker = new Checker('');
    var output = checker.sudokuRows(userInput);
    $('#outputrom').text(output);
  });
});

},{"./../js/sudoku.js":1}]},{},[2]);

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

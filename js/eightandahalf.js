// eightandahalf.js file

var a = 10;
var b = 20;

var value = (a * a) + (2 * a * b) - (b * b);
var isNegative = value < 0 ? 'Wynik ujemny' : 'Wynik dodatni';
var isEqual = value == 0 ? 'Wynik jest równy zero.' : 'Wynik jest większy bądź mniejszy od zera';
document.write(value + ' - ' + isEqual);
console.log(isNegative);
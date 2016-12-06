// plik script.js
// variables declarations should go to the beginning
// declare the default value of variable to avoid 'undefined' value display

// var name = prompt('wpisz swoje imię');
// alert('Witaj ' + name + ' !');
// console.log('Witaj ' + name + ' !');

// zmienne mają kilka typów. Na przykład boolean - logiczna wartość, która może przyjąć właściwość prawdy lub fałszu. 
// warto ustawiać jej przedrostek 'is' ponieważ będzie to zwracało naszą uwagę na to co to za typ zmiennej

var isDogeHappy = true; // pieseł powinien być szczęśliwy - wow

// zmienne liczbowe mają dwa typy: stałe (int) oraz zmiennoprzecinkowe (float)

var age = 27,
	money = 25.90;
// tablice tworzy się poprzez podanie poszczególnych wartości po przecinkach pomiędzy kwadratowymi nawiasami.
// poszczególne indeksy (bo tak nazywają się kolejne elementy tablicy) mają przypisany odpowiedni numer zaczynając od 0

var testArray = [27, 'HTML', 'CSS', 'JS', ['GRUNT', 'GIT', 'JQUERY'], 'BOOTSTRAP'];

/* obiekty to swojego rodzaju kontenery, które zawierają inne typy danych.
	deklaruje się je jak zwykłą zmienna, tylko po znaku przypisania (=) otwieramy nawias klamrowy (literał obiektowy) i pomiędzy nimi
	wpisujemy atrybuty wraz z ich właściwościami. Jeżeli jest więcej, niż jedna właściwość, wpisujemy po każdej parze atrybut:właściwość przecinek.
*/

var person = {
	name: 'Adam',
	surname: 'Pielach',
	age: 27
};

// właściwości wywołujemy poprzez zapisanie nazwy obiektu i po kropce, bądź w nawiasach kwadratowych, wpisujemy nazwę atrybutu.

var userName = person.name;
var userSurname = person['surname']; // nie można pominąć apostrofów/cudzysłowiów, bo skrypt będzie szukał zmiennej, która nie jest zadeklarowana

// można dodać kolejne atrybuty do instniejących już obiektów poprzez odwołanie się do ich nazwy i po kropce wpisanie nazwy natrybutu

// person.favoriteColor = 'Blue';

// Teraz jedno z ćwiczeń z kodilli - obliczanie pola trójkąta

// var a = 2;
// var h = 3;
// var triangleArea = a*h/2;
// console.log(triangleArea);

// document.getElementById('identyfikator').innerHTML = 'Pole trójkąta to: ' + triangleArea;

// ćwiczenie 8.5

// var value = (a * a) + (2 * a * h) - (h * h);
// if (value < 0) {
// 	document.write('Liczba jest mniejsza od zera');
// } else if (value == 0) {
// 	document.write('Liczba jest równa zeru');
// } else {
// 	document.write('Liczba jest większa od zera');
// }

// ĆWICZENIE 8.6

// function getTriangleArea(a, h) {
// 	var area;
// 	if ((a > 0) && (h > 0)) {
// 		area = a*h/2;
// 	} else {
// 		area = "Nieprawidłowe dane";
// 	}
// 	return area;
// }

// var triangleArea1 = getTriangleArea(10, 15);
// var triangleArea2 = getTriangleArea(19, 4);
// var triangleArea3 = getTriangleArea(1, 32);

// document.getElementById('para').innerHTML = getTriangleArea(10, 8);

// ĆWICZENIE 8.7

// var male = ["Peter", "Adam", "Matti", "Alexander", "Christian"];
// var female = ["Agatha", "Lucy", "Maya", "Alexandra", "Anna"];
// var allNames = male.concat(female);
// var newName = prompt("Podaj swoje imię");
// if (allNames.indexOf(newName) === -1) {
// 	allNames.push(newName);
// } else {
// 	newName = alert("Jest już taka osoba na liście gości. Przykro nam...")
// }
// document.getElementById('para').innerHTML = allNames.join(" <br><br> ");

// ĆWICZENIE 8.8

// var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
// var greenElephants = 'Zielone słonie'.toUpperCase();
// var animals = text.replace('Papugi', greenElephants);
// console.log(animals.substr(0, animals.length/2));
// document.getElementById('prop').innerHTML = animals;

// ĆWICZENIE 8.9

// zmieniłem działanie skryptu, bo nie mogłęm ogarnąć tego na dwie pętle. Jedna też działa ;)

function drawTree(levels) {
  var star = new String;
  for (var a = 0 ; a < levels ; a++) {
    star += "*";
    document.getElementById('prop').innerHTML += "<br />" + star;
  }
  if (levels > 10) {
    document.getElementById('prop').innerHTML += "<br /> ** <br /> *** <br /> ****";
  } else if (levels > 20) {
    document.getElementById('prop').innerHTML += "<br /> *** <br /> **** <br /> *****";
  } else {
    document.getElementById('prop').innerHTML += "<br /> * <br /> *";
  }
}
drawTree(15);

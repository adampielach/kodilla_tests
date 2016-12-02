// plik conditionals.js

var a = 27;
var k = 19;

// if (a != k) {
// 	document.write('Nope. Z tej mąki chleba nie będzie.');
// } else {
// 	document.write('No pięknie! Różnica wieku mędzy wami to ' + (a - k) + ' lat!');
// }

// var selectedTab = prompt('Podaj nazwę zakładki:');

// if (selectedTab == 'details') {
// 	document.write('Wybrana zakładka to: ' + selectedTab + ', więc poznamy szczegóły.');
// } else if (selectedTab == 'comments') {
// 	document.write('Wybrana zakładka to: ' + selectedTab + ', więc poczytamy komentarze.');
// } else if (selectedTab == 'contact') {
// 	document.write('Wybrana zakładka to: ' + selectedTab + ', skontaktuj się z nami.');
// } else {
// 	document.write('Nie ma takiej zakładki.');
// }

// switch (selectedTab.toLowerCase()) {
// 	case 'details':
// 		document.write('Jesteś w zakładce "details".');
// 		break;
// 	case 'comments':
// 		document.write('Jesteś w zakładce "comments".');
// 		break;
// 	case 'contact':
// 		document.write('Jesteś w zakładce "contact".');
// 		break;
// 	default:
// 		document.write('Podana przez Ciebie zakładka nie jest prawidłowa.');
// }

var whichIsBigger = a < k ? 'Zmienna a jest większa.' : 'Zmienna k jest większa.';
document.write(whichIsBigger);
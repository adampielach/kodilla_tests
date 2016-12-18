// plik script.js

var ul = document.getElementById('list');
var button = document.getElementById('js-button');

button.addEventListener('click', addItem);

function addItem() {
  var li = document.createElement('li');
  var ulLength = ul.getElementsByTagName('li').length + 1; // added +1 to start from 0
  li.innerHTML = ulLength;
  ul.appendChild(li);
}

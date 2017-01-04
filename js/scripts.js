// plik script.js

<<<<<<< HEAD
var ul = document.getElementById('list');
var button = document.getElementById('js-button');

button.addEventListener('click', addItem);

function addItem() {
  var li = document.createElement('li');
  var ulLength = ul.getElementsByTagName('li').length + 1; // added +1 to start from 0
  li.innerHTML = ulLength;
  ul.appendChild(li);
}
=======
window.onload = function() {

var newGameBtn = document.getElementById('js-newGameButton'); 

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'), 
	pickPaper = document.getElementById('js-playerPick_paper'), 
	pickScissors = document.getElementById('js-playerPick_scissors');
	
pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });
}

var gameState = 'notStarted', //started // ended 
	player = { name: '', score: 0 }, 
	computer = { score: 0 };

var newGameBtn = document.getElementById('js-newGameButton'),
	newGameElem = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElement'),
	resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
	 switch(gameState) {
		 case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block'; 
			resultsElem.style.display = 'block'; 
			break;
		case 'ended':
			newGameBtn.innerText = 'Jeszcze raz';
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
	}
}

setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
	playerNameElem = document.getElementById('js-playerName'),
	computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
	player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza');
	if (player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();

		playerNameElem.innerHTML = player.name;
		// setGamePoints(); // ta funkcja jeszcze nie powstała
	}
}

function playerPick(playerPick) { 
	console.log(playerPick); 
}

function getComputerPick() { 
	var possiblePicks = ['rock', 'paper', 'scissors']; 
	return possiblePicks[Math.floor(Math.random()*3)]; 
}

var playerPickElem = document.getElementById('js-playerPick'), 
	computerPickElem = document.getElementById('js-computerPick'), 
	playerResultElem = document.getElementById('js-playerResult'), 
	computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
	var computerPick = getComputerPick(); 
	playerPickElem.innerHTML = playerPick; 
	computerPickElem.innerHTML = computerPick; 
}
>>>>>>> f8e6e274ea5bb2a8a62ce6f92f056b7360b4959c

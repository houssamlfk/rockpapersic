console.log("Hello World");
function getComputerChoice() {
	let a;
	a = Math.floor(Math.random() * 10) % 3;
	switch (a) {
		case 0:
			return "Rock";
		case 1:
			return "Paper";
		case 2:
			return "Scissors";
	}
}
function play(playerChoice, computerChoice) {
	var game = new Object();
	game[("Rock", "Paper")] = "You win!";
	game[("Rock", "Rock")] = "It's a draw!";
	game[("Rock", "Scissors")] = "You lose!";
	game[("Paper", "Rock")] = "You lose!";
	game[("Paper", "Paper")] = "It's a draw!";
	game[("Paper", "Scissors")] = "You win!";
	game[("Scissors", "Rock")] = "You win!";
	game[("Scissors", "Paper")] = "You lose!";
	game[("Scissors", "Scissors")] = "It's a draw!";
	return game[(playerChoice, computerChoice)];
}
var playerCh;
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var text = document.getElementById("display");
rock.onclick = function() {
	text.innerHTML = play("rock", getComputerChoice());
}
paper.onclick = function() {
	text.innerHTML = play("paper", getComputerChoice());
}
scissors.onclick = function() {
	text.innerHTML = play("scissors", getComputerChoice());
}
console.log(play(playerCh, getComputerChoice()));

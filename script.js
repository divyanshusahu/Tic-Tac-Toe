var originalboard = [];
const humanPlayer = '';
const compPlayer = 'X';
var winCombinations = [
	[,1,2],
	[3,4,5],
	[6,7,8],
	[,3,6],
	[1,4,7],
	[2,5,8],
	[,4,8],
	[2,4,6]
];

const blocks = document.querySelectorAll(".block");

playAgain();

function playAgain() {
	for (var i=0;i<9;i++)
		originalboard[i] = i;
	document.querySelector(".resultMessage").style.display = "none";
	for (var i=0;i<9;i++)
	{
		blocks[i].innerHTML = "";
		blocks[i].style.removeProperty("background-color");
		blocks[i].addEventListener("click", turnClick);
	}
}

function turnClick(s) {
	//console.log(s.target.id);
	turn(s.target.id, humanPlayer);
}

function turn(s, player) {
	
}
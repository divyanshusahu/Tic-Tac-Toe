var originalboard = [];
const humanPlayer = '0';
const compPlayer = 'X';
var winCombinations = [ //coordinates of a winning positions
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
];

var gameHasWinner = false;
const blocks = document.querySelectorAll(".block");

playAgain();

function playAgain() {
	for (var i=0;i<9;i++)
		originalboard[i] = i;
	document.querySelector(".resultMessage").style.display = "none";
	gameHasWinner = false;
	for (var i=0;i<9;i++)
	{
		blocks[i].innerText = "";
		blocks[i].style.removeProperty("background-color");
		blocks[i].addEventListener("click", turnClick);
	}
}

function turnClick(s) {
	//console.log(s.target.id);
	if (typeof originalboard[s.target.id] == 'number')
	{
		turn(s.target.id, humanPlayer);
		if(!isTie() && gameHasWinner == false)
			turn(bestSpot(), compPlayer);
	}
}
//function for recording turns and decide the results
function turn(s, player) {
	originalboard[s] = player;
	document.getElementById(s).innerText = player;
	let gameWon = checkWin(originalboard, player);
	if (gameWon)
	{
		gameHasWinner = true;
		gameOver(gameWon);
	}
	//console.log(gameHasWinner);
}

function checkWin(board, player) {
	let plays = [];
	for (var i=0; i<9;i++)
	{
		if (originalboard[i] === player)
			plays = plays.concat(i);
	}
	//console.log(plays);
	let gameWon = null;
	//console.log(plays);
	for (var i=0;i<8;i++)
	{
		//console.log(winCombinations[i]);
		//let x = winCombinations[i];
		let check = intersection(plays, winCombinations[i])
		//console.log(check);
		if (isEqual(check,winCombinations[i]))
		{
			gameWon = {index:i, player:player};
			//console.log(gameWon);
			break;
		}
	}
	return gameWon;
} 

function intersection(a,b) {
	let minArray = a.length <= b.length ? a : b;
	//console.log(minArray);
	let maxArray = a.length > b.length ? a : b;
	//console.log(maxArray);
	let intersectionNumber = [];
	for (var i=0;i<minArray.length;i++)
	{
		if (maxArray.indexOf(minArray[i]) > -1)
			intersectionNumber = intersectionNumber.concat(minArray[i]);
	}
	return intersectionNumber;
}

function isEqual (a,b) {
	if (a.length != b.length)
		return false;
	let x = a.length;
	while(--x)
	{
		if (a[x] != b[x])
			return false;
	}
	return true;
}
//if someone wins
function gameOver(a) {
	//console.log(a);
	//console.log(a['index']);
	let winIndex = a['index'];
	let winner = a['player'];
	//console.log(winner == humanPlayer);
	for (var i=0;i<3;i++)
		blocks[winCombinations[winIndex][i]].style.backgroundColor = (winner == humanPlayer ? "blue" : "red");
	for (var i=0;i<9;i++)
		blocks[i].removeEventListener("click", turnClick);
	gameResult(winner == humanPlayer ? "You Win!" : "You Lose");
}
//to make best move as cpu
function bestSpot() {
	return minimax(originalboard, compPlayer).index;
}
//marks the filled blocks
function emptyBlocks(board) {
	return board.filter(n => typeof n == 'number');
}

function minimax(newBoard, player) {
	var availableBlocks = emptyBlocks(newBoard);
	if (checkWin(newBoard, humanPlayer))
		return {score:-10};
	else if (checkWin(newBoard, compPlayer))
		return {score:10};
	else if (availableBlocks.length === 0)
		return {score:0};

	var moves = []
	for (var i=0; i<availableBlocks.length;i++)
	{
		var move = {};
		move.index = newBoard[availableBlocks[i]];
		newBoard[availableBlocks[i]] = player;
		if (player == compPlayer)
		{
			var r = minimax(newBoard, humanPlayer);
			move.score = r.score;
		}
		else 
		{
			var r = minimax(newBoard, compPlayer);
			move.score = r.score;
		}

		newBoard[availableBlocks[i]] = move.index
		moves.push(move);
	}

	var bestMove;
	if (player == compPlayer)
	{
		var bestScore = -10000;
		for (var i=0;i<moves.length;i++)
		{
			if (moves[i].score > bestScore)
			{
				bestScore = moves[i].score
				bestMove = i;
			}
		}
	}
	else
	{
		var bestScore = 10000;
		for (var i=0;i<moves.length;i++)
		{
			if (moves[i].score < bestScore)
			{
				bestScore = moves[i].score
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}
//to check tie
function isTie() {
	if (emptyBlocks(originalboard).length == 0 && gameHasWinner == false)
	{
		for (var i=0;i<9;i++)
		{
			blocks[i].style.backgroundColor = "green";
			blocks[i].removeEventListener("click", turnClick);
		}
		gameResult("Match Tied!!")
		return true;
	}
	return false;
}
//function to show the results
function gameResult(result) {
	document.querySelector(".resultMessage").style.display = "inline-block";
	document.querySelector(".resultMessage p").innerText = result;
}

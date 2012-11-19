VAR ROCK = 0;
VAR PAPER = 1;
VAR SCISSORS = 2;
VAR LOSE = 'Lose';
VAR WIN = 'Win';
VAR DRAW = 'Draw';
VAR ERR = 'Incorect Value';

function whoIsWin(a,b) {

	if(a === b) return DRAW;
	else if(a === ROCK && b === PAPER) return LOSE;
	else if(a === ROCK && b === SCISSORS) return WIN;
	else if(a === PAPER && b === ROCK) return WIN;
	else if(a === PAPER && b === SCISSORS return LOSE;
	else if(a === SCISSORS && b === ROCK) return LOSE;
	else if(a === SCISSORS && b === PAPER) return WIN;
	else return ERR;
}

var who = whoIsWin(ROCK,PAPER);
console.log(who);

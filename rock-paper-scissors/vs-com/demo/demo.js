var who = whoIsWin(ROCK,PAPER);
console.log(who);

var ROCK = 0;
var PAPER = 1;
var SCISSORS = 2;
var LOSE = 'Lose';
var WIN = 'Win';
var DRAW = 'Draw';
var ERR = 'Incorect Value';

function whoIsWin(a) {
    
    var rps = [ROCK,PAPER,SCISSORS];
    var random = rps.sort(shuffle); //sorting to random
    var b = random[0];
    console.log('computer is =' + b);

    if(a === b) return DRAW;
    else if(a === ROCK && b === PAPER) return LOSE;
    else if(a === ROCK && b === SCISSORS) return WIN;
    else if(a === PAPER && b === ROCK) return WIN;
    else if(a === PAPER && b === SCISSORS) return LOSE;
    else if(a === SCISSORS && b === ROCK) return LOSE;
    else if(a === SCISSORS && b === PAPER) return WIN;
    else return ERR;
}

function shuffle(a,b) {
	return Math.random() > 0.5 ? -1 : 1;
}

var who = whoIsWin(ROCK);
console.log(who);

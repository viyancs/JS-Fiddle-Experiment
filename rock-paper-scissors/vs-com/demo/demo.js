var ROCK = 0;
var PAPER = 1;
var SCISSORS = 2;
var LOSE = 'Lose';
var WIN = 'Win';
var DRAW = 'Draw';
var ERR = 'Incorect Value';

function whoIsWin(a) {
    
    var rps = [ROCK,PAPER,SCISSORS];
    var random = Math.floor(Math.random() * rps.length); 
    var b = random;
    console.log('random is =' + random);

    if(a === b) return DRAW;
    else if(a === ROCK && b === PAPER) return LOSE;
    else if(a === ROCK && b === SCISSORS) return WIN;
    else if(a === PAPER && b === ROCK) return WIN;
    else if(a === PAPER && b === SCISSORS) return LOSE;
    else if(a === SCISSORS && b === ROCK) return LOSE;
    else if(a === SCISSORS && b === PAPER) return WIN;
    else return ERR;
}


var who = whoIsWin(ROCK);
console.log(who);
​
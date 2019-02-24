'use strict';
const t = require('./lib/ttt');
var readlineSync = require('readline-sync');
const ttt = new t();


console.log(`Let's Play Tic-Tac-Toe`);

while (!ttt.GameOver()) {
    ttt.PrintInfoBoard();
    ttt.MakeAMove(readlineSync.question('Your Position: '));
}

ttt.PrintBoard();
console.log(ttt.WhoIsTheWinner());


'use strict';
const t = require('./lib/ttt');
var readlineSync = require('readline-sync');
const ttt = new t();
var vsCPU = true;
var token = 'X';

console.log(`Let's Play Tic-Tac-Toe`);
if (readlineSync.question('Single Player (default) or Double Player (S/D): ').toUpperCase() === 'D')
    vsCPU = false;

if (readlineSync.question(`Select Player 1's Symbol (X/O): `).toUpperCase() === 'O')
    token = 'O';

ttt.StartGame(token,vsCPU);

while (!ttt.GameOver()) {
    ttt.PrintInfoBoard();
    ttt.MakeAMove(readlineSync.question(`Player ${ttt.WhosNext()}, Your Move: `));
}

ttt.PrintBoard();
console.log(ttt.WhoIsTheWinner());


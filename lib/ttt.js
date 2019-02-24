'use strict';
module.exports = function () {
  this.tokens = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  this.numOfPlayers = 1;
  this.winnerPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];
  this.Winner = {};
  this.lastToken;
  this.lastPlayer = null;


  this.UpdateWinner = function () {


    this.winnerPos.map(x => {
      if (this.tokens[x[0]] === this.lastToken && this.tokens[x[1]] === this.lastToken && this.tokens[x[2]] === this.lastToken)
        this.Winner = { result: 'winner', details: { 'player': this.lastPlayer, 'token': this.lastToken, 'position': x } };
    })

    if (this.GameOver() && typeof this.Winner.result === 'undefined')
      this.Winner = { result: 'tie' };


  }

  this.GetMoveToken = function () {
    if (typeof this.lastToken === 'undefined' || this.lastToken === 'O')
      this.lastToken = 'X';
    else
      this.lastToken = 'O';

    return this.lastToken;
  }

  this.CpuPosition = function () {
    if (this.GameOver())
      return;

    var pos = Math.floor(Math.random() * 9) + 1;
    if (this.tokens[pos] === ' ')
      return pos;
    else
      return this.CpuPosition();

  }

  this.MakeAMove = function (position) {

    if (this.GameOver())
      return console.log('Game Over, Start a new game');


    if (typeof position !== 'undefined' && (position >= 0 && position <= 8) && this.tokens[position] === ' ') {
      this.tokens[position] = this.GetMoveToken();
      if (this.lastPlayer === 2)
        this.lastPlayer--;
      else
        this.lastPlayer++;

      console.log(`Player ${this.lastPlayer} played ${this.tokens[position]} at position ${position}`);
      this.UpdateWinner();
    }

    // CPU Position
    if (this.numOfPlayers === 1 && !this.GameOver() && this.lastPlayer === 1) {
      var pos = this.CpuPosition();
      this.tokens[pos] = this.GetMoveToken();
      if (this.lastPlayer === 2)
        this.lastPlayer--;
      else
        this.lastPlayer++;

      this.UpdateWinner();
      console.log(`Player ${this.lastPlayer} (CPU) played ${this.tokens[pos]} at position ${pos}`);
    }

  }

  this.StartGame = function (player1Token = 'X', vsCPU = true) {
    // If Two Player game

    if (typeof vsCPU !== 'undefined' && vsCPU === false)
      this.numOfPlayers = 2;

    this.lastPlayer = 2;

    if (player1Token.toUpperCase() === 'X')
      this.lastToken = 'O';
    else
      this.lastToken = 'X';

    this.tokens = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    this.Winner = {};

  }


  this.PrintBoard = function () {
    if (typeof this.tokens !== 'undefined' && this.tokens.length == 9) {
      console.log(`
                | ${this.tokens[0]} | ${this.tokens[1]} | ${this.tokens[2]} |
                -------------
                | ${this.tokens[3]} | ${this.tokens[4]} | ${this.tokens[5]} |
                -------------
                | ${this.tokens[6]} | ${this.tokens[7]} | ${this.tokens[8]} |
              `);

    }
  }

  
  this.PrintInfoBoard = function () {
    if (typeof this.tokens !== 'undefined' && this.tokens.length == 9) {
      console.log(`
                | 0 | 1 | 2 |   | ${this.tokens[0]} | ${this.tokens[1]} | ${this.tokens[2]} |
                -------------
                | 3 | 4 | 5 |   | ${this.tokens[3]} | ${this.tokens[4]} | ${this.tokens[5]} |
                -------------
                | 6 | 7 | 8 |   | ${this.tokens[6]} | ${this.tokens[7]} | ${this.tokens[8]} |
              `);

    }
  }

  this.WhoIsTheWinner = function () {
    return this.Winner;
  }

  this.GameOver = function () {

    var movesLeft = 0;

    this.tokens.map(x => {
      if (x === ' ')
        movesLeft++;
    })

    if (typeof this.Winner.result !== 'undefined' || movesLeft === 0)
      return true;
    else
      return false;
  }
}
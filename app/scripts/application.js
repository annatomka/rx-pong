var Application = (function () {
  var game = null;

  return {
    init: function () {
      this.createNewGame();
    },
    createNewGame: function () {
      game = new Game();
    },
    getActualGame: function () {
      return game;
    }
  }
})();

var Game = function(){
  this.opponentA = null;
  this.opponentB = null;

  this.initialize = function () {
    this.opponentA = new Opponent();
    this.opponentB = new Opponent();

  }.bind(this);


  this.initialize();
};

var Opponent = function () {

};

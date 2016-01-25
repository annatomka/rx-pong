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

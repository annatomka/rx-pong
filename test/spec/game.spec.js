(function () {
  'use strict';

  describe('Game', function () {
    var game;

    it('should have a method initialize()', function () {
      game = new Game();
      expect(game.initialize).to.exist;
    });

    describe('initialize', function () {
      it('should create  two opponents', function () {
        game = new Game();

        expect(game.opponentA).to.not.equal(null);
        expect(game.opponentB).to.not.equal(null);
      });
    });
  });
})();

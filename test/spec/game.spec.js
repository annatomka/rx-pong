(function () {
  'use strict';

  describe('Game', function () {
    var game;
    var width = 219;
    var height = 308;
    var ball_position_x = 101;
    var ball_position_y = 216;

    it('should have a method initialize()', function () {
      game = new Game();
      expect(game.initialize).to.exist;
    });

    describe('initialize', function () {
      it('should create  two players', function () {
        game = new Game();

        expect(game.playerA).to.not.equal(null);
        expect(game.playerA).to.be.an.instanceOf(Player);

        expect(game.playerB).to.not.equal(null);
        expect(game.playerB).to.be.an.instanceOf(Player);
      });

      it('should set width and height to default values when constructor has such params', function () {
        game = new Game();
        expect(game.width).to.equal(CANVAS_DEFAULT_WIDTH);
        expect(game.height).to.equal(CANVAS_DEFAULT_HEIGHT);
      });

      it('should set width and height params from constructor if they are given', function () {
        game = new Game(width,height);
        expect(game.width).to.equal(width);
        expect(game.height).to.equal(height);
      });

      it('should create a canvas', function () {
        expect(game.canvas).to.exist;
      });

      it('should set a given width and heigth to the canvas', function () {
        expect(game.canvas.width).to.equal(width);
        expect(game.canvas.height).to.equal(height);

      });

      it('should create a context from the canvas', function(){
        expect(game.context).to.exist;
        expect(game.context.canvas.width).to.equal(game.canvas.width);
        expect(game.context.canvas.height).to.equal(game.canvas.height);
      });

      it('should create a ball', function () {
        expect(game.ball).to.exist;
      });
    });
  });
})();

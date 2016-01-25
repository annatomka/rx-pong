(function () {
  'use strict';

  describe('Ball', function () {
    var ball;
    var ball_position_x = 101;
    var ball_position_y = 216;

    it('should have position x and y', function () {
      ball = new Ball();
      expect(ball.position_x).to.exist;
      expect(ball.position_y).to.exist;
    });

    it('should set position to default values', function () {
      expect(ball.position_x).to.equal(BALL_POSITION_X);
      expect(ball.position_y).to.equal(BALL_POSITION_Y);
    });

    it('should set position to given values', function () {
      ball = new Ball(ball_position_x, ball_position_y);

      expect(ball.position_x).to.equal(ball_position_x);
      expect(ball.position_y).to.equal(ball_position_y);
    });
  });
})();

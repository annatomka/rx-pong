(function () {
  'use strict';

  describe('Application', function () {
    var createNewGameFnSpy;
    beforeEach(function () {
      createNewGameFnSpy = chai.spy(Application.createNewGame);
    });

    it('should have a method createNewGame()', function () {
      expect(Application.createNewGame).to.exist;
    });

    describe('createNewGame', function () {

      it('should create a new Game', function () {
        Application.createNewGame();
        expect(Application.getActualGame()).to.not.equal(null);
      });
    });
  });
})();

(function () {
  'use strict';

  describe('Application', function () {
    var createNewGameFnSpy;
    beforeEach(function () {
      createNewGameFnSpy = chai.spy(Application.createNewGame);
    });

    describe('createNewGame', function () {

      it('should create a new Game', function () {
        Application.createNewGame();
        expect(Application.getActualGame()).to.not.equal(null);
      });
    });
  });
})();

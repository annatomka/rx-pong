(function () {
  'use strict';

  describe('Application', function () {
    var createNewGameFnSpy;
    beforeEach(function () {
      createNewGameFnSpy = chai.spy(Application.createNewGame);
    })
    describe('init', function () {

      it('should create a new Game', function () {
        Application.init();

console.log("test")
        expect(createNewGameFnSpy).to.have.been.called();
      });
    });
  });
})();

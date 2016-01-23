var Application = (function () {
  var game = null;

  return {
    init: function () {
      this.createNewGame();
    },
    createNewGame: function () {
      console.log("create game called")
    }
  }
})();

"use strict";

(function(exports) {

  exports.Application = function () {
    this.data = {};
  }

  exports.Application.prototype.add = function(elem) {
    if (typeof elem !== "string") {
      throw new TypeError("Argument is not a string: "+elem);
    }
    this.data[elem] = true;
  }

  exports.Application.prototype.contains = function(elem) {
    // Comparison ensures boolean result
    return this.data[elem] === true;
  }

  exports.Application.prototype.copy = function() {
    var result = new exports.Application();
    Object.keys(this.data).forEach(function(elem) {
      result.add(elem);
    });
    return result;
  }

}(typeof exports === "undefined" ? (this.strset = {}) : exports));

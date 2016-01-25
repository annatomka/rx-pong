var Game = function(width,height){
  this.playerA = null;
  this.playerB = null;
  this.ball = null;

  this.width = width || CANVAS_DEFAULT_WIDTH;
  this.height = height || CANVAS_DEFAULT_HEIGHT;
  this.canvas = null;

  this.initialize();
};

Game.prototype.initialize = function () {
  this.playerA = new Player();
  this.playerB = new Player();

  this.ball = new Ball();

  this.canvas =  document.createElement("canvas");
  this.canvas.width = this.width;
  this.canvas.height = this.height;

  this.context = this.canvas.getContext('2d');
};

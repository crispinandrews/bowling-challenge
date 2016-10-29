'use strict';

function Game() {
  this.currentFrame = []
  this.allFrames= []
  this.frameScore = 0
  this.bowlCount = 2
};

Game.prototype.frameScore = function(){
  return this.frameScore
};

Game.prototype.bowl = function(num){
  this.frameScore += num
  this.currentFrame.push(num)
  this.bowlCount -= 1
};

Game.prototype.endFrame = function(frame){
  this.allFrames.push(frame)
  this.currentFrame = []
};
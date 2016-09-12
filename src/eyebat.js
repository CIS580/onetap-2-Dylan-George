"use strict";

/**
 * @module exports the EyeBat class
 */
module.exports = exports = EyeBat;


/**
 * @constructor EyeBat
 * Creates a new player object
 * @param {Postition} position object specifying an x and y
 */
function EyeBat(position) {
  this.state = "left";
  this.frame = 0;
  this.timer = 0;
  this.x = position.x;
  this.y = position.y;
  this.width  = 16;
  this.height = 16;
  this.spritesheet  = new Image();
  this.spritesheet.src = encodeURI('assets/link/not link/eyebat.png');
  
  var self = this;
}

/**
 * @function updates the eyebat object
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 */
EyeBat.prototype.update = function(elapsedTime) 
{
	this.timer += elapsedTime;
	if(this.timer > 1000/16)
	{
		this.frame = (this.frame+1)%4;
		this.timer = 0;
	}
	switch(this.state) 
	{	
		case "left": 
			this.x -= 1;
			break;
		case "right": 
			this.x += 1;
	}
}

/**
 * @function renders the player into the provided context
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 * {CanvasRenderingContext2D} ctx the context to render into
 */
EyeBat.prototype.render = function(time, ctx) {
  ctx.drawImage(
    // image
    this.spritesheet,
    // source rectangle
    this.frame * this.width, 0, this.width, this.height,
    // destination rectangle
    this.x, this.y, 2* this.width, 2*this.height
  );
}

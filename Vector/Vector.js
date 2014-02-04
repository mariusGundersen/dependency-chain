define([], function(){
	
	function Vector(x, y){
		this.x = x;
		this.y = y;
	};

	Vector.prototype.magnitude = function(){
		return Math.sqrt(this.x*this.x, this.y*this.y);
	};

	return Vector;

});
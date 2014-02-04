define(['Vector'], function(Vector){
	
	Vector.prototype.reverse = function(){
		return new Vector(-this.x, -this.y);
	};

	return Vector;

});
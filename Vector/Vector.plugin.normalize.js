define(['Vector'], function(Vector){
	
	Vector.prototype.normalize = function(){
		var magnitude = this.magnitude();
		return new Vector(this.x/magnitude, this.y/magnitude);
	};

	return Vector;
});
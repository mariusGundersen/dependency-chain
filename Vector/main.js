require.config({
	chain: {
		'Vector': ['Vector', 'Vector.plugin.normalize', 'Vector.plugin.reverse']
	}
});

require(['Vector'], function(Vector){
	
	assert(Vector.prototype.reverse);
	assert(Vector.prototype.normalize);

	var v = new Vector(1, 3);

	assert(v.reverse);
	assert(v.normalize);

	assert(v.reverse().x == -v.x);
	assert(v.reverse().y == -v.y);

	assert(v.normalize().x == v.x/v.magnitude());
	assert(v.normalize().y == v.y/v.magnitude());

	console.log("Success");
});


function assert(k){
	if(!k){
		throw new Error("Oh noes!");
	}
}
require.config({
	chain: {
		'jQuery': ['jquery', 'jquery.math', 'jquery.console']
	}
});

require(['jQuery'], function($){
	$().log($().add(1, $().multiply(2, 3)));
});

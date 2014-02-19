require.config({
	chain: {
		'jQuery': ['jquery', 'ajaxmock']
	}
});

require(['library', 'jQuery'], function(library, jQuery){

  setup:{
    jQuery.ajax.returns(jQuery.Deferred().resolve(['post1', 'post2', 'post3']));
  }

  test: {
    library.getLatestPosts().then(function(posts){
      console.log('result of getLatestPosts:', posts);
    });

    console.log('url used by getLatestPosts:', jQuery.ajax.firstCall.args[0].url);
  }

  setup: {
    jQuery.ajax.reset();
    jQuery.ajax.returns(jQuery.Deferred().resolve({title: 'post1', content:'this is the content'}));
  }

  test: {
    library.getPostById('post1').then(function(post){
      console.log('result of getPostById:', post);
    });

    console.log('url used by getPostById:', jQuery.ajax.firstCall.args[0].url);
  }


});

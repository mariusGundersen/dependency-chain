define(['jQuery'], function($){

  return {
    getLatestPosts: function(){
      return $.getJSON('http://example.com/posts');
    },
    getPostById: function(id){
      return $.getJSON('http://example.com/post/'+id);
    }
  };

});
define(['jQuery'], function($){
  console.log('jqeury.log', $);
  
  $.fn.log = function(){
    console.log.apply(console, arguments);
  };

  return $;
});
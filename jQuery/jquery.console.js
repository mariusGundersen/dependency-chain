define(['jQuery'], function($){
  
  $.fn.log = function(){
    console.log.apply(console, arguments);
  };

  return $;
});
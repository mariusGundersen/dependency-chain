define(['jQuery'], function($){
  
  $.fn.add = function(a, b){
    return a + b;
  };

  $.fn.multiply = function(a, b){
    return a*b;
  };

  return $;
});
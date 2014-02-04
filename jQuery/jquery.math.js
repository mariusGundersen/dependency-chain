define(['jQuery'], function($){
  console.log('jquery.math', $);
  
  $.fn.add = function(a, b){
    return a + b;
  };

  $.fn.multiply = function(a, b){
    return a*b;
  };

  return $;
});
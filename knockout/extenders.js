define(['knockout'], function(ko){
  
  ko.observable.fn.add = function(that){

    return ko.computed(function(){
      return this()*1 + ko.unwrap(that)*1;
    }, this);

  };

  return ko;

});
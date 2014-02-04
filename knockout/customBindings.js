define(['knockout'], function(ko){

  ko.bindingHandlers.live = {
    init: function(element, valueAccessor){
      ko.bindingHandlers.value.init(element, valueAccessor, {get: function(){return 'afterkeydown'}});
    }, 
    update: function(element, valueAccessor){
      ko.bindingHandlers.value.update(element, valueAccessor);
    }
  }
  
  return ko;

});
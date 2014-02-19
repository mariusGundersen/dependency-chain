define(['jQuery'], function($){
  
  sinon.stub($, 'ajax');

  return $;
});
require.config({
	chain: {
		'knockout': ['knockout', 'customBindings', 'extenders']
	}
});

require(['knockout'], function(ko){

  function ViewModel(){
    var self = this;

    this.a = ko.observable(0);
    this.b = ko.observable(0);

    this.sum = this.a.add(this.b);
  }

  ko.applyBindings(new ViewModel());

});

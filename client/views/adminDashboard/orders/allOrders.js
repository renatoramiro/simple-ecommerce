incrementLimit = function() {  
	var inc = 5;
  newLimit = Session.get('limit') + inc;
  Session.setTemp('limit', newLimit);
}

// Template.allOrders.rendered = function() {  
//   // is triggered every time we scroll
//   $(window).scroll(function() {
//     if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
//       incrementLimit();
//     }
//   });
// }

Template.allOrders.events({  
  'click .give-me-more': function(evt) {
    incrementLimit();
  }
});

Template.allOrders.helpers({  
  orders: function() {
    return Orders.find({ }, { sort: {createdAt: -1}, limit: Session.get('limit') });
  },

  limite: function () {
  	return Session.get('limit');
  },

  total: function () {
    var total = 0.0;
    _.map(this.products, function (product) {
      total += product.price * product.quantity;
    });
    return total;
  },
	
	created: function(){
		Tracker.autorun(function (argument) {
			Meteor.subscribe('allOrders', Session.get('limit'));
		});
	}
});
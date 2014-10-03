incrementLimit = function() {  
	var inc = 5;
  newLimit = Session.get('limit') + inc;
  Session.set('limit', newLimit);
}

Template.allOrders.created = function () {
	Session.setTemp('limit', 5);
	Tracker.autorun(function (argument) {
		Meteor.subscribe('allOrders', Session.get('limit'));
	});
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
    console.log(Session.get('limit'));
  }
});

Template.allOrders.helpers({  
  orders: function() {
    return Orders.find({ }, { limit: Session.get('limit') });
  },

  limite: function () {
  	return Session.get('limit');
  }
});
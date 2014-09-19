Template.purchases.helpers({
	purchases: function () {
		return Orders.find({"user._id": Meteor.userId()});
	}
});

// Template.showPurchase.helpers({
// 	order: function () {
// 		return Orders.findOne(Meteor.userId(), this.params._id);
// 	}
// });
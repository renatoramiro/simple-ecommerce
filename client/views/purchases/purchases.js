Template.purchases.helpers({
	purchases: function () {
		return Orders.find({userId: Meteor.userId()}, {sort: {createdAt: -1}});
	},
});

Template.showPurchase.helpers({
	total: function () {
		var total = 0.0;
		_.each(Orders.findOne({_id: this._id}).products, function (product) {
			total += product.price * product.quantity;
		});
		return total;
	}
});

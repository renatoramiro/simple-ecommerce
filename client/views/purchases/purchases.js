Template.purchases.helpers({
	purchases: function () {
		return Orders.find({userId: Meteor.userId()}, {sort: {createdAt: -1}});
	},

	total: function () {
		var total = 0.0;
		_.map(this.products, function (product) {
			total += product.price * product.quantity;
		});
		return total;
	}
});

Template.showPurchase.helpers({
	total: function () {
		var total = 0.0;
		_.map(this.products, function (product) {
			total += product.price * product.quantity;
		});
		return total;
	}
});

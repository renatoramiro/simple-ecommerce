Template.showUser.helpers({
	user: function(){
		return Meteor.users.findOne({});
	},
	
	orders: function () {
		return Orders.find({}, {sort: {createdAt: -1}, limit: 5});
	},
	
	total: function(){
		var total = 0.0;
		_.map(this.products, function (product) {
			total += product.price * product.quantity;
		});
		return total;
	}
});
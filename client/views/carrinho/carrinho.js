Template.carrinho.helpers({
	cart: function(){
  	return Carts.findOne({_id: Session.get('carts')});
	},

	products: function () {
		return Carts.findOne({_id: Session.get('carts')}).products;
	},

	total: function () {
		var total = 0.0;
		_.each(Carts.findOne({_id: Session.get('carts')}).products, function (product) {
			total += product.price * product.quantity;
		});
		return total;
	}
});

Template.carrinho.events({
	'click #clearCart': function(e, t){
		e.preventDefault();
		var cart = Session.get('carts');
		Carts.remove({_id: cart});
		Session.set('carts', null);
	},

	'click #removeProduct': function (e, t) {
		e.preventDefault();
		var cart = Session.get('carts');
		Meteor.call('updateRemoveProductCart', cart, this._id);
	}
});
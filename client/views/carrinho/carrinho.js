Template.carrinho.helpers({
	cart: function(){
  	return Carts.findOne({_id: Session.get('carts')});
	},

	products: function () {
		return Carts.findOne({_id: Session.get('carts')}).products;
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

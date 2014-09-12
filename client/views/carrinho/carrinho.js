Template.carrinho.cart = function(){
  return Carts.findOne({_id: Session.get('carts')});
};

Template.carrinho.events({
	'click #clearCart': function(e, t){
		e.preventDefault();
		var cart = Session.get('carts');
		Carts.update({_id: cart}, {$set: { products: []}});
	},

	'click #removeProduct': function (e, t) {
		e.preventDefault();
		var cart = Session.get('carts');
		Meteor.call('updateRemoveProductCart', cart, this._id);
	}
});
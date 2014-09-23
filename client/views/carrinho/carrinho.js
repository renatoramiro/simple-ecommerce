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
	'click #updateCart': function(e, t){
		e.preventDefault();
		var newQuantity = t.find('#updateQuantity_' + this._id).value;
		if(parseInt(newQuantity) === 0){
			Meteor.call('updateRemoveProductCart', Session.get('carts'), this._id);
		} else {
			Meteor.call('updateQuantityProductCart', Session.get('carts'), this._id, newQuantity);
		}
	},

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

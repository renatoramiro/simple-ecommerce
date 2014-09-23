Template.checkout.helpers({
	cart: function () {
		return Carts.findOne({_id: Session.get('carts')});
	},

	total: function () {
		var total = 0.0;
		_.each(Carts.findOne({_id: Session.get('carts')}).products, function (product) {
			total += product.price * product.quantity;
		});
		return total;
	}
});

Template.checkout.events({
	'click a#close-purchase': function (e, t) {
		e.preventDefault();
		var carrinho = Carts.findOne({_id: Session.get('carts')});
		_.map(carrinho.products, function (product) {
			if(product.quantity > Products.findOne({_id: product._id}).quantity){
				Router.go('carrinho');
				Errors.throw(product.name + " ultrapassou a quantidade no estoque. Quantidade máxima: " + Products.findOne({_id: product._id}).quantity);
			} else {
				Meteor.call('newOrder', Meteor.userId(), carrinho.products, function (error, result) {
					if (error) {
						Errors.throw(error.message);
					}
					var cart = Session.get('carts');
					Carts.remove({_id: cart});
					Session.set('carts', null);
					Router.go('showPurchase', {_id: result});
				});
			}

		});
	}
});

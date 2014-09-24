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
	},

	limiteDeCreditoValido: function(){
		var result = false;
		if(Meteor.user() && Meteor.user().profile.creditLimit > 0){
			result = true;
		}
		return result;
	}
});

Template.checkout.events({
	'click a#close-purchase': function (e, t) {
		e.preventDefault();
		var carrinho = Carts.findOne({_id: Session.get('carts')});
		var opcaoPagamento = t.find('input[name=opcaoPagamento]:checked').value;
		var erros = 0;
		// Validar quantidade do produto em estoque
		_.map(carrinho.products, function (product) {
			if(product.quantity > Products.findOne({_id: product._id}).quantity){
				Router.go('carrinho');
				erros += 1;
				Errors.throw(product.name + " ultrapassou a quantidade no estoque. Quantidade máxima: " + Products.findOne({_id: product._id}).quantity);
			}
		});

		var total = 0.0;
		_.each(Carts.findOne({_id: Session.get('carts')}).products, function (product) {
			total += product.price * product.quantity;
		});

		// Validar limite de crédito
		if ((total > Meteor.user().profile.creditLimit) && (opcaoPagamento == 'Limite de Crédito')) {
			Router.go('checkout');
			erros += 1;
			Errors.throw("Você não possui Limite de Crédito suficiente.");
		}

		if (erros < 1) {
			Meteor.call('newOrder', Meteor.userId(), carrinho.products, opcaoPagamento, function (error, result) {
				if (error) {
					Errors.throw(error.message);
				}
				var cart = Session.get('carts');
				Carts.remove({_id: cart});
				Session.set('carts', null);
				Router.go('showPurchase', {_id: result});
			});
		}
	}
});

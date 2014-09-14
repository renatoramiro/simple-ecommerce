Template.amountCart.total = function () {
	return Carts.findOne({_id: Session.get('carts')});
}
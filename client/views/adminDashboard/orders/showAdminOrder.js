Template.showAdminOrder.helpers({
	total: function () {
		var total = 0.0;
    _.map(this.products, function (product) {
      total += product.price * product.quantity;
    });
    return total;
	}
})
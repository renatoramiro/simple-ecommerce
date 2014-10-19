UI.registerHelper('limitPagination', function (limit) {
    if (limit >= Orders.find().count()) {
    	return false;
    } else {
    	return true;
    }
});

UI.registerHelper('somaProdutos', function (products) {
	var total = 0.0;
    _.map(this.products, function (product) {
      total += product.price * product.quantity;
    });
    return accounting.formatMoney(total, "R$ ", 2, ".", ",");
})
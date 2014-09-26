Template.listProducts.helpers({
	products: function () {
		return Products.find();
	}
});
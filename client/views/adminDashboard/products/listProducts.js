Template.listProducts.helpers({
	products: function () {
		return Products.find({}, {sort: {name: 1}});
	}
});
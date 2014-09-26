Template.editProduct.helpers({
	product: function() {
		return Products.findOne({_id: this._id});
	}
});
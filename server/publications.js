Meteor.publish('products', function(){
  return Products.find();
});

Meteor.publish('detailsProduct', function(productId){
  return Products.find({_id: productId});
});

Meteor.publish('cart', function(){
  return Carts.find();
});

Meteor.publish('purchases', function (userId) {
	return Orders.find({'user._id': userId});
});

Meteor.publish('allPurchases', function () {
	return Orders.find();
});

Meteor.publish('showPurchase', function (userId, orderId) {
	return Orders.find({_id: orderId, userId: userId});
});
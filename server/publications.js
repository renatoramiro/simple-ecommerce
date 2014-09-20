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
	return Orders.find({userId: userId});
});

Meteor.publish('showPurchase', function (userId, orderId) {
	return Orders.find({_id: orderId, userId: userId});
});
Meteor.publish('products', function(){
  return Products.find();
});

Meteor.publish('detailsProduct', function(productId){
  return Products.find({_id: productId});
});

Meteor.publish('cart', function(cartId){
  return Carts.find({_id: cartId});
});

Meteor.publish('purchases', function (userId) {
	return Orders.find({userId: userId});
});

Meteor.publish('showPurchase', function (userId, orderId) {
	return Orders.find({_id: orderId, userId: userId});
});

Meteor.publish("users", function () {
  return Meteor.users.find({}, {fields: {emails: 1, profile: 1, roles: 1}});
});

Meteor.publish("showUser", function (userId) {
  return Meteor.users.find({_id: userId}, {fields: {emails: 1, profile: 1, roles: 1}});
});

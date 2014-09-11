Meteor.publish('products', function(){
  return Products.find();
});

Meteor.publish('detailsProduct', function(productId){
  return Products.find({_id: productId});
});

Meteor.publish('cart', function(){
  return Carts.find();
});

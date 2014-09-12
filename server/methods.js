Meteor.methods({
  updateIncCart: function (cartId, productId) {
    Carts.update({_id: cartId, 'products._id': productId}, { $inc: { 'products.$.quantity': 1} });
  },

  updateCart: function(cartId, productData){
    Carts.update({_id: cartId}, { $push: { products: productData } });
  }
});

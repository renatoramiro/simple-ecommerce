Meteor.methods({
  updateIncCart: function (cartId, productId) {
    Carts.update({_id: cartId, 'products._id': productId}, { $inc: { 'products.$.quantity': 1} });
  },

  updateCart: function(cartId, productData){
    Carts.update({_id: cartId}, { $push: { products: productData } });
  },

  updateRemoveProductCart: function (cartId, productId) {
    Carts.update({_id: cartId, 'products._id': productId}, { $pull: { products: { _id: productId } } });
  },

  updateQuantityProductCart: function(cartId, productId, newQuantity){
    Carts.update({_id: cartId, 'products._id': productId}, { $set: { 'products.$.quantity': newQuantity} });
  },

  editProfile: function (userId, completeName) {
  	Meteor.users.update({_id: userId}, {$set: {'profile.completeName': completeName}});
  },

  newOrder: function (userId, products, opcaoPagamento) {
    var user = Meteor.users.findOne({_id: userId});
    var total = 0.0;
    _.map(products, function(product){
      total += product.quantity * product.price;
      Products.update({_id: product._id}, {$inc: {quantity: -(product.quantity)}});
    });
    if (opcaoPagamento === 'Limite de Crédito') {
      Meteor.users.update({_id: user._id}, {$inc: { 'profile.creditLimit': -(total)}});
    }
    return Orders.insert({userId: user._id, userCompleteName: user.profile.completeName, formaDePagamento: opcaoPagamento, products: products});
  }
});

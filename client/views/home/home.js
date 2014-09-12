Template.home.products = function(){
  return Products.find();
};

Template.detailsProduct.events({
  'click #cart': function(){
    var product = Products.findOne({_id: this._id});
    var cart = Carts.findOne({_id: Session.get('carts')});

    Carts.update({_id: cart._id}, { $push: { products: { _id: product._id, name: product.name, price: product.price, quantity: 1 } } });
  }
})

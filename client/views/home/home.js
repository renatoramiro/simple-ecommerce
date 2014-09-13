Template.home.products = function(){
  return Products.find();
};

Template.detailsProduct.events({
  'click #cart': function(){
    var product = Products.findOne({_id: this._id});
    var productData = { _id: product._id, name: product.name, price: product.price, quantity: 1}

    if(Session.get('carts') == null) {
      Session.set('carts', Carts.insert({}));
      console.log('Insert Cart');
    } else {
      Session.set('carts', Session.get('carts'));
    }

    var cart = Carts.findOne({_id: Session.get('carts')});

    if(Carts.findOne({_id: cart._id, 'products._id': product._id})){
      console.log('Mais UM');
      Meteor.call('updateIncCart', cart._id, product._id);
    } else {
      console.log('Primeiro');
      Meteor.call('updateCart', cart._id, productData);
    }

    Router.go('carrinho');
  },
});

Template.home.helpers({
  products: function(){
    return Products.find();
  },

  name: function(){
    return this.name.substring(0, 15);
  }
});

Template.detailsProduct.helpers({
  comEstoque: function(){
    if(this.quantity >= 1){
      return true;
    } else {
      return false;
    }
  }
});

Template.detailsProduct.events({
  'click #cart': function(){
    var product = Products.findOne({_id: this._id});
    var productData = { _id: product._id, name: product.name, price: product.price, quantity: 1}

    if(Session.get('carts') == null || Session.get('carts') == undefined || Carts.findOne({_id: Session.get('carts')}) == undefined) {
        Session.set('carts', Carts.insert({}));
    } else {
      Session.set('carts', Session.get('carts'));
    }

    var cart = Session.get('carts');

    if(Carts.findOne({_id: cart, 'products._id': product._id})){
      Meteor.call('updateIncCart', cart, product._id);
    } else {
      Meteor.call('updateCart', cart, productData);
    }

    Router.go('carrinho');
  },
});

Router.configure({
  layoutTemplate: 'application',
  waitOn: function(){return [Meteor.subscribe('products'), Meteor.subscribe('cart', Session.get('carts'))]},
});

Router.map(function(){
  this.route('home', {
    path: '/',
    waitOn: function(){return Meteor.subscribe('products')}
  });

  this.route('detailsProduct', {
    path: '/products/:_id',
    waitOn: function(){ return Meteor.subscribe('detailsProducts', this.params._id)},
    data: function(){ return Products.findOne({_id: this.params._id})}
  });

  this.route('carrinho', {
    path: 'carrinho',
  });

  this.route('profile', {
    path: '/profile',
  });

  this.route('editProfile', {
    path: '/profile/edit',
    data: function() { return Meteor.user(); }
  });

  this.route('purchases', {
    path: '/purchases',
    waitOn: function(){ return Meteor.subscribe('purchases', Meteor.userId()); },
  });

  this.route('showPurchase', {
    path: '/purchase/:_id',
    waitOn: function(){ return Meteor.subscribe('showPurchase', Meteor.userId(), this.params._id); },
    data: function(){ return Orders.findOne({userId: Meteor.userId(), _id: this.params._id}); }
  });

  this.route('checkout', {
    path: '/checkout',
  });
});

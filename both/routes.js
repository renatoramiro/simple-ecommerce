Router.configure({
  layoutTemplate: 'application',
  // loadingTemplate: 'loading',
  waitOn: function(){return [Meteor.subscribe('products'), Meteor.subscribe('cart', Session.get('carts'))]},
});

Router.map(function(){
  this.route('carrinho', {
    path: '/error',
  });

  this.route('home', {
    path: '/',
    waitOn: function(){return Meteor.subscribe('products')},
  });

  this.route('detailsProduct', {
    path: '/products/:_id',
    waitOn: function(){ return Meteor.subscribe('detailsProduct', this.params._id)},
    data: function(){ return Products.findOne({_id: this.params._id})}
  });

  this.route('carrinho', {
    path: '/carrinho',
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

  // Rotas da Área Administrativa
  this.route('dashboard', {
    path: '/admin/dashboard',
    layoutTemplate: 'adminLayout',
    waitOn: function(){ return Meteor.subscribe('users'); },
  });

  this.route('showUser', {
    path: '/admin/users/:_id',
    layoutTemplate: 'adminLayout',
    waitOn: function(){ return Meteor.subscribe('showUser', this.params._id); },
    data: function() { return Meteor.users.findOne({_id: this.params._id}); }
  });

  this.route('editUserRoles', {
    path: '/admin/users/roles/:_id/edit',
    layoutTemplate: 'adminLayout',
    waitOn: function(){ return Meteor.subscribe('users'); },
    data: function() { return Meteor.users.findOne({_id: this.params._id}, {fields: {profile: 1}}); },
  });

  this.route('editUser', {
    path: '/admin/users/:_id/edit',
    layoutTemplate: 'adminLayout',
    waitOn: function(){ return Meteor.subscribe('users'); },
    data: function() { return Meteor.users.findOne({_id: this.params._id}, {fields: {profile: 1}}); },
  });

  this.route('listProducts', {
    path: '/admin/products',
    layoutTemplate: 'adminLayout',
  });

  this.route('showProduct', {
    path: '/admin/product/:_id',
    waitOn: function(){ return Meteor.subscribe('detailsProduct', this.params._id)},
    data: function(){ return Products.findOne({_id: this.params._id})},
    layoutTemplate: 'adminLayout',
  });

  this.route('newProduct', {
    path: '/admin/products/new',
    layoutTemplate: 'adminLayout',
  });

  this.route('editProduct', {
    path: '/admin/products/edit/:_id',
    waitOn: function(){ return Meteor.subscribe('detailsProduct', this.params._id)},
    data: function(){ return Products.findOne({_id: this.params._id})},
    layoutTemplate: 'adminLayout',
  });

  this.route('allOrders', {
    path: '/admin/orders',
    waitOn: function(){ return Meteor.subscribe('allOrders'); },
    layoutTemplate: 'adminLayout',
  });
});

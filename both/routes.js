Router.configure({
  layoutTemplate: 'application',
  waitOn: function(){return [Meteor.subscribe('products'), Meteor.subscribe('cart')]},
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
});

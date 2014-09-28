Products = new Meteor.Collection('products');

Schemas = {};

Schemas.Products = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome do Produto'
  },

  price: {
    type: Number,
    min: 0,
    decimal: true,
    label: 'Preço'
  },

  quantity: {
    type: Number,
    min: 0,
    label: 'Quantidade em Estoque'
  },

  createdAt: {
    type: Date,
    optional: true,
    denyUpdate: true,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    }
  },
});

Products.attachSchema(Schemas.Products);

Products.allow({
  insert: function (userId, product) {
    if(Meteor.user() && Meteor.user().profile.permissao === 'admin'){
      return true;
    } else {
      return false;
    }
  },

  update: function (userId, product) {
    if(Meteor.user() && Meteor.user().profile.permissao === 'admin'){
      return true;
    } else {
      return false;
    }
  }
});

Products.deny({
  insert: function (userId, product) {
    if(Meteor.user() && Meteor.user().profile.permissao === 'admin'){
      return false;
    } else {
      return true;
    }
  },

  update: function (userId, product) {
    if(Meteor.user() && Meteor.user().profile.permissao === 'admin'){
      return false;
    } else {
      return true;
    }
  }
});
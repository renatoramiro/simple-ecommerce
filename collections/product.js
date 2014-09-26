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

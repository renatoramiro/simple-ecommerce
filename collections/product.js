Products = new Meteor.Collection('products');

Schemas = {};

Schemas.Products = new SimpleSchema({
  name: {
    type: String
  },

  price: {
    type: Number,
    decimal: true
  },

  quantity: {
    type: Number
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

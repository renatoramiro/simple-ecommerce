Carts = new Meteor.Collection('carts');

Schemas = {}

Schemas.Cart = new SimpleSchema({
  products: {
    type: [Object]
  },

  'products.$.name': {
    type: String
  },

  'products.$.price': {
    type: Number,
    decimal: true
  },

  'products.$.quantity': {
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
})

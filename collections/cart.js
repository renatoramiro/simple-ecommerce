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
  }
})

Orders = new Meteor.Collection('orders');

Schemas = {}

Schemas.Order = new SimpleSchema({
  products: {
    type: [Object],
    optional: true
  },

  'products.$._id': {
    type: String
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

  formaDePagamento: {
    type: String
  },

  userId: {
    type: String
  },

  userCompleteName: {
    type: String
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

Orders.attachSchema(Schemas.Order);

Orders.allow({
  insert: function (userId, order) {
    if (Meteor.user() && order.userId == userId) {
      return true;
    } else {
      return false;
    }
  },

  update: function (userId, order) {
    if (Meteor.user() && order.userId == userId) {
      return true;
    } else {
      return false;
    }
  },
})
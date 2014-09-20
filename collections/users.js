Schema = {};

Schema.UserProfile = new SimpleSchema({
    completeName: {
      type: String,
			label: 'Complete Name',
			optional: true
    },
});

Schema.User = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  emails: {
    type: [Object]
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },

  // orders: {
  //   type: [Object],
  //   optional: true
  // },

  // "orders.$._id": {
  //   type: String
  // },

  // "orders.$._products": {
  //   type: [Object]
  // },

  // "orders.$._products.$._id": {
  //   type: String
  // },

  // "orders.$._products.$.name": {
  //   type: String
  // },

  // "orders.$._products.$.price": {
  //   type: Number,
  //   decimal: true
  // },

  // "orders.$._products.$.quantity": {
  //   type: Number
  // },

  createdAt: {
    type: Date
  },
  profile: {
    type: Schema.UserProfile,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  // Add `roles` to your schema if you use the meteor-roles package.
  // Note that when using this package, you must also specify the
  // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
  // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
  // You can't mix and match adding with and without a group since
  // you will fail validation in some cases.
  // roles: {
  //     type: Object,
  //     optional: true,
  //     blackbox: true
  // }
});

Meteor.users.attachSchema(Schema.User);
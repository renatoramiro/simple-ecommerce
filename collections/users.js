Schema = {};

Schema.UserProfile = new SimpleSchema({
    completeName: {
      type: String,
			label: 'Nome Completo',
			optional: true
    },

    creditLimit: {
      type: Number,
      label: 'Limite de Crédito',
      decimal: true,
      optional: true
    },

    permissao: {
      type: String,
      label: 'Permissão',
      optional: true
    }
});

Schema.User = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  emails: {
    type: [Object],
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
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
  //   type: Object,
  //   optional: true,
  //   blackbox: true
  // }
});

Meteor.users.attachSchema(Schema.User);

// Meteor.users.allow({
//   insert: function (userId, user) {
//     if(Meteor.user() && Meteor.user().profile.permissao === 'admin'){
//       return true;
//     }
//   },
//
//   update: function (userId, user) {
//     if(Meteor.user() && Meteor.user().profile.permissao === 'admin'){
//       return true;
//     }
//   }
// });
//
// Meteor.users.deny({
//   insert: function (userId, user) {
//     if(Meteor.user() && Meteor.user().profile.permissao === 'admin'){
//       return false;
//     }
//   },
//
//   update: function (userId, user) {
//     if(Meteor.user() && Meteor.user().profile.permissao === 'admin'){
//       return false;
//     }
//   }
// });

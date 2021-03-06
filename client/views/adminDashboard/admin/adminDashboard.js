Template.dashboard.helpers({
	users: function () {
		return Meteor.users.find({}, {fields: {emails: 1, profile: 1}, sort: {'profile.completeName': 1}});
	},

	roles: function () {
		return Roles.getRolesForUser(Meteor.users.findOne({_id: this._id}));
	}
})
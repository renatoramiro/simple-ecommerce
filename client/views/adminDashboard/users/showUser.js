Template.showUser.helpers({
	roles: function () {
		return Roles.getRolesForUser(Meteor.users.findOne({_id: this._id}));
	}
});
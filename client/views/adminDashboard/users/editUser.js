Template.editUser.helpers({
	user: function() {
		return Meteor.users.findOne({_id: this._id});
	}
});
Template.editUserRoles.helpers({
	// roles: function () {
	// 	return Roles.getRolesForUser(Meteor.users.findOne({_id: this._id}));
	// },

	// isAdmin: function () {
	// 	var result = false;
	// 	if (Meteor.users.find({_id: this._id}).profile.permissao === 'admin') {
	// 		result = true;
	// 	}
	// 	return result;
	// },

	// isCliente: function () {
	// 	var result = false;
	// 	if (Meteor.user()) {
	// 		if (Meteor.user().profile.permissao === 'cliente') {
	// 			result = true;
	// 		}
	// 	};
	// 	return result;
	// },

	// isVendedor: function () {
	// 	var result = false;
	// 	if (Meteor.user()) {
	// 		if (Meteor.users.findOne({_id: this._id}).profile.permissao === 'vendedor') {
	// 			result = true;
	// 		}
	// 	};
	// 	return result;
	// },
});

Template.editUserRoles.events({
	'submit form#editRoles': function (e, t) {
		e.preventDefault();
		var role = t.find('input:radio[name=roles]:checked').value;
		var userId = this._id;
		Meteor.call('updateRoleUser', userId, role, function (error, result) {
			if (error) {
				Errors.throw(error.reason);
			} else {
				Router.go('showUser', {_id: userId});
			}
		});
	}
});
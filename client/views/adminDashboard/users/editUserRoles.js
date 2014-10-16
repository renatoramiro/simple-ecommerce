Template.editUserRoles.helpers({});

Template.editUserRoles.events({
	'submit form#editRoles': function (e, t) {
		e.preventDefault();
		var role = t.find('input:radio[name=roles]:checked').value;
		Meteor.call('updateRoleUser', Router.current().params._id, role, function (error, result) {
			if (error) {
				Errors.throw(error.reason);
			} else {
				Router.go('showUser', {_id: Router.current().params._id});
			}
		});
	}
});
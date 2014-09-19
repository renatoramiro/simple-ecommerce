Template.editProfile.events({
	'submit form#editProfileForm': function (e, t) {
		e.preventDefault();
		var completeName = t.find('#edit-completeName').value;
		console.log(Meteor.userId() + ' : ' + completeName);
		Meteor.call('editProfile', Meteor.userId(), completeName, function (error, result) {
			if(error) console.log(error);
			Router.go('profile');
		});
	}
});
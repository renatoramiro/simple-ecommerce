Template.adminLayout.helpers({
	isAdmin: function () {
		var result = false;
		if(Meteor.user()){
			if (Meteor.users.findOne({_id: Meteor.userId()}, {fields: {profile: 1}}).profile.permissao === 'admin') {
				result = true;
			}
		}
		return result;
	}
});

Template.application.helpers({
	isAdmin: function () {
		var result = false;
		if(Meteor.user()){
			if (Meteor.users.findOne({_id: Meteor.userId()}, {fields: {profile: 1}}).profile.permissao === 'admin') {
				result = true;
			}
		}
		return result;
	}
});
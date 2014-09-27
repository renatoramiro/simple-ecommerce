Meteor.startup(function () {
	if(Meteor.users.find({'profile.permissao': 'admin'}).count() < 1){
		Accounts.createUser({email: 'admin@mail.com', password: '12345678', profile: {permissao: 'admin', completeName: 'Admin'}});
	}
});

var filters = {
	isLoggedIn: function (pause) {
		if(!(Meteor.loggingIn() || Meteor.user())){
			// throw new Meteor.Error(403, "Not authorized to create new users");
			Errors.throw('Acesso não autorizado');
			this.render('error');
			pause();
		}
	},

	isAdmin: function (pause) {
		if(!(Meteor.user() && Meteor.user().profile.permissao == 'admin')) {
			Errors.throw('Área Administrativa - Acesso não autorizado');
			this.setLayout('application');
			this.render('error');
			pause();
		};
	},

	clearSeenErrors: function (pause) {
		Errors.clearSeen();
	},
};

Router.onBeforeAction('loading');
Router.onBeforeAction(filters.clearSeenErrors);
Router.onBeforeAction(filters.isAdmin, {only: ['dashboard', 'showUser', 'editUserRoles', 'listProducts', 'showProduct', 'editUser', 'newProduct', 'editProduct', 'allOrders']});
Router.onBeforeAction(filters.isLoggedIn, {only: ['profile', 'editProfile', 'purchases', 'showPurchase', 'checkout']});

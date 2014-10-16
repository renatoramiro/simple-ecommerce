var filters = {
	isLoggedIn: function (pause) {
		if(!(Meteor.loggingIn() || Meteor.user())){
			// throw new Meteor.Error(403, "Not authorized to create new users");
			// Errors.throw('Acesso não autorizado');
			// Session.set('currentRoute', Router.current().path);
			this.render('notAuthorized');
			pause();
		}
	},

	isAdmin: function (pause) {
		if(!(Meteor.user() && Meteor.user().profile.permissao == 'admin')) {
			// Errors.throw('Área Administrativa - Acesso não autorizado');
			// Session.set('currentRoute', Router.current().path);
			this.setLayout('application');
			this.render('adminNotAuthorized');
			pause();
		};
	},

	clearSeenErrors: function (pause) {
		Errors.clearSeen();
	}
};

Router.onBeforeAction(filters.clearSeenErrors);
Router.onBeforeAction(filters.isAdmin, {only: ['dashboard', 'showUser', 'editUserRoles', 'listProducts', 'showProduct', 'editUser', 'newProduct', 'editProduct', 'allOrders']});
Router.onBeforeAction(filters.isLoggedIn, {only: ['profile', 'editProfile', 'purchases', 'showPurchase', 'checkout']});

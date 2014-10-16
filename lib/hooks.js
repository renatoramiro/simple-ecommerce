var filters = {
	isLoggedIn: function (pause) {
		if(!(Meteor.loggingIn() || Meteor.user())){
			this.render('notAuthorized');
			pause();
		}
	},

	isAdmin: function (pause) {
		if(!(Meteor.user() && Meteor.user().profile.permissao == 'admin')) {
			this.setLayout('application');
			this.render('adminNotAuthorized');
			pause();
		};
	},

	clearSeenErrors: function (pause) {
		Errors.clearSeen();
	},

	clearLimit: function () {
		Session.setTemp('limit', 5);
	}
};

Router.onBeforeAction(filters.clearSeenErrors);
Router.onBeforeAction(filters.clearLimit, {only: ['allOrders']});
Router.onBeforeAction(filters.isAdmin, {only: ['dashboard', 'showUser', 'editUserRoles', 'listProducts', 'showProduct', 'editUser', 'newProduct', 'editProduct', 'allOrders']});
Router.onBeforeAction(filters.isLoggedIn, {only: ['profile', 'editProfile', 'purchases', 'showPurchase', 'checkout']});

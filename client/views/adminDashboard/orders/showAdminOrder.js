Template.showAdminOrder.helpers({
	linkUser: function () {
		return Router.routes['showUser'].url({_id: this.userId});
	}
})
AutoForm.addHooks(['updateUserForm'], {
  onSuccess: function(operation, result, template) {
    Router.go('showUser', {_id: Router.current().params._id});
  }
});
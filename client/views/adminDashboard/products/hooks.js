AutoForm.addHooks(['updateProductForm'], {
  onSuccess: function(operation, result, template) {
    Router.go('showProduct', {_id: Router.current().params._id});
  },
});

AutoForm.addHooks(['insertProductForm'], {
  onSuccess: function(operation, result, template) {
    Router.go('showProduct', {_id: result});
  }
});
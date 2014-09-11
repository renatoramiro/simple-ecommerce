var filters = {
  setSession: function(){
    if(Session.get('carts') == null) {
      Session.set('carts', Carts.insert({}));
    }
  }
};

Router.onBeforeAction(filters.setSession);

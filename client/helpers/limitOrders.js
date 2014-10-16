UI.registerHelper('limitPagination', function (limit) {
    if (limit >= Orders.find().count()) {
    	return false;
    } else {
    	return true;
    }
});
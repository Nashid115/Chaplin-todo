define('models/todo',[
	'models/base/model'
],function(Model) {
	var Todo = Model.extend({
		defaults : {
			name : "",
			isActive : true
		}
	});
	return Todo;
});
	
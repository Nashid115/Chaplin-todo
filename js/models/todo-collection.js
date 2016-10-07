define('models/todo-collection',[
	'models/base/model',
	'models/base/collection'
],function(Model, Collection) {
	var TodoCollection = Collection.extend({
		model : Model
	});
	return TodoCollection;
});

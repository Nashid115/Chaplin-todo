define('application', [
	'chaplin',
	'models/todo-collection'
],function(Chaplin, TodoCollection) {
	var TodoApp = Chaplin.Application.extend({
		title : 'Chaplin Todo Application',
		initMediator: function() {
		    Chaplin.mediator.todoCollection = new TodoCollection();
		    this.constructor.__super__.initMediator.call(this);
		}
	});
	return TodoApp;
});

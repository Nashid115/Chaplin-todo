define('controllers/input-controller',[
	'controllers/base/controller',
	'models/todo',
	'views/input-view',
	'views/list-view',
	'models/todo-collection',
	'chaplin',
	'views/item-view',
	'views/table-view'
],function(BaseController, Todo, InputView, ListView, TodoCollection, Chaplin, ItemView, TableView) {
	var InputController = BaseController.extend({
		show : function(params) {
			// 	Chaplin.mediator.todoCollection = new TodoCollection();
			// this.model = new Todo();
			this.view = new InputView({
				collection : Chaplin.mediator.todoCollection
			});
			this.view = new ListView({
				collection : Chaplin.mediator.todoCollection
			});
			console.log(Chaplin.mediator.todoCollection);

			window.tom = Chaplin.mediator.todoCollection;
		},
		showAll : function(params) {
			console.log(params);
			console.log(Chaplin.mediator.todoCollection);
			if(params.status == 'all') {
				var todoList = new TodoCollection(Chaplin.mediator.todoCollection);
			}
			else if(params.status == 'active') {
				var todoList = new TodoCollection(Chaplin.mediator.todoCollection.filter({isActive : true}));
			}
			else if(params.status == 'complete') {
				var todoList = new TodoCollection(Chaplin.mediator.todoCollection.filter({isActive : false}));
			}
			this.view = new InputView({
				collection : todoList
			});
			this.view = new TableView({
				collection : todoList
			});
		}
	});
	return InputController;
});
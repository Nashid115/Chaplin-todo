define('views/input-view',[
	'views/base/view',
	'models/todo',
	'views/list-view'
],function(View, TodoModel, ListView) {
	var InputView = View.extend({
		el : ".new-todo",
		events : {
			"keyup" : "addTodo"
		},
		initialize : function(options) {
			this.collection = options.collection;
		},
		addTodo : function(e) {
			if(e.keyCode === 13 && this.$el.val() != '') {
				var name = this.$el.val();
				var todo = new TodoModel({
					name : name
				});
				this.collection.add(todo);
				// console.log(this.collection);
				this.$el.val('');
			}
		}
	});
	return InputView;
});
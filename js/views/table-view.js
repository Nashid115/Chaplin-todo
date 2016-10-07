define('views/table-view',[
	'views/base/collection-view',
	'views/item-view',
],function(CollectionView, ItemView) {
	var TableView = CollectionView.extend({
		el : '#table',
		listSelector : '#todo-list',
		getTemplateFunction : ItemView.prototype.getTemplateFunction,
		initialize : function(options) {
			console.log(options);
			this.collection = options.collection;
		},
		autoRender : true
	});
	return TableView;
});
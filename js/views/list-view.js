define('views/list-view',[
	'views/base/collection-view',
	'views/item-view',
],function(CollectionView, ItemView) {
	var ListView = CollectionView.extend({
		el : '#todo-list',
		itemView : function(){
			console.log('Trying to instantiate view');
		},
		initialize : function() {
			console.log('initialized CollectionView');
			// this.collection = options.collection;
		},
		autoRender : true
	});

	return ListView;
});
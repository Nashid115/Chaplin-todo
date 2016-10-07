define('views/item-view',[
	'views/base/view'
],function(View) {
	var ItemView = View.extend({
		initialize : function(options) {
			console.log('Here');
		}
		// tagName : 'tr',
		// getTemplateFunction : function() {
		// 	var template = _.template($('#item-template').html());
		// 	return template;
		// },
		// events : {
		// 	"click .cross" : "delete",
		// 	"click .tick" : "toggle",
		// 	"dblclick .edit" : "edit",
		// 	"blur .edit" : "editComplete",
		// 	"keyup .edit" : "editComplete"
		// },
		// initialize : function(options) {
		// 	console.log('Hello');
		// 	// this.collection = options.collection;
		// 	// this.model = options.model;
		// 	// options.table.append(this.$el);

		// },
		// delete : function() {
		// 	this.$el.remove();
		// 	this.model.destroy();
		// },
		// toggle : function() {
		// 	var isActive = this.model.get('isActive');
		// 	this.model.set('isActive', !isActive);
		// 	this.$el.find('.edit').toggleClass('strike');
		// },
		// edit : function() {
		// 	this.$el.find('.edit').attr('readonly', false);
		// 	this.$el.find('.edit').addClass('edit-box');
		// },
		// editComplete : function(e) {
		// 	if(e.keyCode == 13 || e.type == "focusout") {
		// 		var name = this.$el.find('.edit').val();
		// 		this.model.set({
		// 			name : name
		// 		});
		// 		this.$el.find('.edit').attr('readonly', true);
		// 		this.$el.find('.edit').removeClass('edit-box');
		// 	}
		// },
		// autoRender : true
	});

	return ItemView;
});
XiFinalProject.Views.IceCreamsIndexItem = Backbone.View.extend({
	template: JST['ice_creams/index_item'],

	className: "ice-cream-item",

	initialize: function(){
		this.listenTo(this.model, "sync", this.render)
	},

	render: function(){
		var content = this.template({ice_cream: this.model})
		this.$el.html(content)
		return this
	}

});

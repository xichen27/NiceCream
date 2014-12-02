XiFinalProject.Views.NiceBoxIndexItem = Backbone.View.extend({
	template: JST['nice_boxes/index_item'],

	className: "nice-box-item",

	initialize: function(){
		this.listenTo(this.model, "sync", this.render)
	},

	render: function(){
		var content = this.template({nice_box: this.model})
		this.$el.html(content)
		return this
	}

});
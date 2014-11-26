XiFinalProject.Views.ReviewIndexItem = Backbone.View.extend({
	template: JST['reviews/index_item'],
	tagName: "li",
	className: "review-item",

	initialize: function(){
		this.listenTo(this.model, "sync", this.render)
	},

	render: function(){
		var content = this.template({review: this.model})
		this.$el.html(content)
		return this
	}

});


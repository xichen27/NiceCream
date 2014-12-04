XiFinalProject.Views.ReviewIndexItem = Backbone.View.extend({
	template: JST['reviews/index_item'],
	tagName: "li",
	className: "review-item",

	initialize: function(options){
		this.listenTo(this.model, "sync", this.render),
		this.user = options.user
	},

	render: function(){
		var content = this.template({
			review: this.model,
			user: this.user
		})
		this.$el.html(content)
		return this
	}

});


XiFinalProject.Views.UserReviewIndexItem = Backbone.View.extend({
	template: JST['reviews/user_review'],
	tagName: "li",
	className: "user-review-item",

	initialize: function(options){
		this.listenTo(this.model, "sync", this.render);
		this.iceCream = options.iceCream;
		this.listenTo(this.iceCream, 'sync', this.render);
	},

	render: function(){
		var content = this.template({
			review: this.model,
			iceCream: this.iceCream
		})
		this.$el.html(content)
		return this
	}

});
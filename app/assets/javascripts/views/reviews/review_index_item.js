XiFinalProject.Views.ReviewIndexItem = Backbone.View.extend({
	template: JST['reviews/index_item'],

	className: "review-item",

	initialize: function(options){
		this.listenTo(this.model, "sync", this.render),
		this.user = options.user
	},

	render: function(){

		var content = this.template({
			review: this.model,
			user: this.user
		});
		this.$el.html(content);
		this.review();
		return this
	},

	review: function(){
		var review = this.model.get("rating")
		this.$("#review-rating-" + this.model.id).raty({
			readOnly: true,
			start: review,
			path: "/assets"
		})
	} 

});


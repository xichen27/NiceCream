XiFinalProject.Views.UserReviewIndexItem = Backbone.View.extend({
	template: JST['reviews/user_review'],
	
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
		this.myReview()
		return this
	},

	myReview: function(){
		var myRating = this.model.get("rating")
		this.$("#my-rating-" + this.iceCream.id).raty({
			readOnly: true,
			start: myRating,
			path: "/assets"
		});
	} 

});
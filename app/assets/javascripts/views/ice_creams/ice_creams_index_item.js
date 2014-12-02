XiFinalProject.Views.IceCreamsIndexItem = Backbone.View.extend({
	template: JST['ice_creams/index_item'],

	className: "ice-cream-item",

	initialize: function(options){
		this.listenTo(this.model, "sync", this.render);
		this.currentUser = options.currentUser;
		this.listenTo(this.model, "sync", this.render);
	},

	render: function(){
		var content = this.template({
			ice_cream: this.model
		});
		this.$el.html(content);
		this.averageRating();
		//this.myRating();


		return this
	},

	averageRating: function(){
		this.$(".average-rating").raty({
			readOnly: true,
			start: 3, //this.model.averageRating
			path: "/assets"
		});
	},

	myRating: function(){
		// var myRate = this.currentUser.reviews.where(ice_cream_id === this.model.id);
		var myRate = this.currentUser.reviews().findWhere({ice_cream_id: this.model.id});
		if (myRate){
			this.$(".my-rating").rating({
				readOnly: true,
				start: myRate
			});
		} else {
			var that = this;
			this.$(".my-rating").rating({
				readOnly: false,
				click: function(score, event){
					var newReview = new XiFinalProject.Models.Review();
					newReview.save({
						user_id: that.currentUser.id,
						ice_cream_id: this.model.id,
						rating: score
					}, {
						success: function(){
							that.currentUser.reviews.add(newReview)
						}
					})
				}
			});
		}
	}

});

XiFinalProject.Views.IceCreamsIndexItem = Backbone.View.extend({
	template: JST['ice_creams/index_item'],

	className: "ice-cream-item",

	initialize: function(options){
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(XiFinalProject.currentUser.reviews(), "sync add", this.render)
		this.listenTo(XiFinalProject.currentUser.refrigeratings(), "sync add", this.render)
	},

	events: {
		"click button": "saveFavorite",
		"click div.my-rating": "redirect"
	},

	redirect: function(){
		if (!XiFinalProject.currentUser.id){
			alert("Please sign in first.")
		}
	},

	saveFavorite: function(events){
		if(XiFinalProject.currentUser.id){
			var iceCreamId = $(event.currentTarget).find("button").data("ice-cream-id");
			var newRefrigerating = new XiFinalProject.Models.Refrigerating();
			newRefrigerating.save({
				ice_cream_id: iceCreamId,
				user_id: XiFinalProject.currentUser.id
			}, {
				success: function(){
					XiFinalProject.currentUser.refrigeratings().add(newRefrigerating)
					XiFinalProject.currentUser.refrigeratedIceCreams().add(
					XiFinalProject.Collections.iceCreams.getOrFetch(iceCreamId)
					);

				}
			})
		} else {
			alert("Please sign in first.")
		}
	},

	render: function(){
		var content = this.template({
			ice_cream: this.model
		});
		this.$el.html(content);
		this.averageRating();
		this.myRating();


		return this
	},

	averageRating: function(){
		this.$("#average-rating-" + this.model.id).raty({
			readOnly: true,
			start: this.model.get('average_rating'),
			path: "/assets"
		});
	},

	myRating: function(){
		var myRate = XiFinalProject.currentUser.reviews()
					.findWhere({ ice_cream_id: this.model.id });
		if (myRate){
			this.$("#my-rating-" + this.model.id).raty({
				readOnly: true,
				start: myRate.get("rating"),
				path: "/assets"
			});
		} else {
			var that = this;
			this.$("#my-rating-" + this.model.id).raty({
				readOnly: false,
				start:0,
				path: "/assets",
				click: function(score, event){
					var newReview = new XiFinalProject.Models.Review();
					var oldRefrigerating = XiFinalProject.currentUser
								.refrigeratings().findWhere({ ice_cream_id: that.model.id });
					newReview.save({
						user_id: XiFinalProject.currentUser.id,
						ice_cream_id: that.model.id,
						rating: score
					}, {
						success: function(){
							XiFinalProject.currentUser.reviews().add(newReview);
							XiFinalProject.currentUser.reviewedIceCreams().add(
							XiFinalProject.Collections.iceCreams.getOrFetch(that.model.id));
							oldRefrigerating.destroy();
							XiFinalProject.currentUser.refrigeratedIceCreams().remove(that.model.id)
						}
					})
				}
			});
		}
	}

});

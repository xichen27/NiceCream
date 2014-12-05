XiFinalProject.Models.IceCream = Backbone.Model.extend({
	urlRoot: "api/ice_creams",

	reviews: function(){
		if (!this._reviews){
			this._reviews = new XiFinalProject.Collections.Reviews([], {
				ice_cream: this
			})
		}
		return this._reviews
	},

	reviewers: function(){
		if(!this._reviewers){
			this._reviewers = new XiFinalProject.Collections.Users([], {
				ice_cream: this
			})
		}
		return this._reviewers;
	},

	parse: function(response){
		if(response.reviews){
			this.reviews().set(response.reviews, {parse: true});
			delete response.reviews
		};

		if(response.reviewers){
			this.reviewers().set(response.reviewers, {parse: true});
			delete response.reviewers
		};

		return response
	}

});


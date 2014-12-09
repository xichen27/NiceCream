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

	creamery: function(){
		if(!this._creamery){
			this._creamery = new XiFinalProject.Models.Creamery()
		}
		return this._creamery
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

		if(response.creamery){
			this.creamery().set(response.creamery, {parse: true});
			delete response.creamery
		}

		return response
	}

});


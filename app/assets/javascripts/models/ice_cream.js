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

	parse: function(response){
		if(response.reviews){
			this.reviews().set(response.reviews, {parse: true});
			delete response.reviews
		}
		return response
	}

});


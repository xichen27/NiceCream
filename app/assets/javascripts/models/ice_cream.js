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

	// averageRating: function(){
	// 	if(!this._averageRating){
	// 		this._averageRating = 0
	// 	}
	// 	return this._averageRating;
	// },

	parse: function(response){
		if(response.reviews){
			this.reviews().set(response.reviews, {parse: true});
			delete response.reviews
		};
		// if(response.average_rating){
		// 	this._averageRating = response.average_rating
		// 	delete response.average_rating
		// }
		return response
	}

});


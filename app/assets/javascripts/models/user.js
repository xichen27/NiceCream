XiFinalProject.Models.User = Backbone.Model.extend({
	urlRoot: "api/users",

	reviewedIceCreams: function(){
		if (!this._reviewedIceCreams){
			this._reviewedIceCreams = new XiFinalProject.Collections.IceCreams([], {
				user: this
			})
		}
		return this._reviewedIceCreams
	},

	refrigeratedIceCreams: function(){
		if (!this._refrigeratedIceCreams){
			this._refrigeratedIceCreams = new XiFinalProject.Collections.IceCreams([], {
				user: this
			})
		}
		return this._refrigeratedIceCreams
	},

	refrigeratings: function(){
		if (!this._refrigeratings){
			this._refrigeratings = new XiFinalProject.Collections.Refrigeratings([], {
				user: this
			})
		}
		return this._refrigeratings
	},

	reviews: function(){
		if (!this._reviews){
			this._reviews = new XiFinalProject.Collections.Reviews([], {
				user: this
			})
		}
		return this._reviews
	},

	parse: function(response){
		if (response.reviewed_ice_creams){
			this.reviewedIceCreams().set(response.reviewed_ice_creams, {parse: true});
			delete response.reviewed_ice_creams
		}; 

		if (response.refrigerated_ice_creams){
			this.refrigeratedIceCreams().set(response.refrigerated_ice_creams, {parse: true});
			delete response.refrigerated_ice_creams
		}; 

		if (response.refrigeratings){
			this.refrigeratings().set(response.refrigeratings, {parse: true});
			delete response.refrigeratings
		}; 

		if (response.reviews){
			this.reviews().set(response.reviews, {parse: true});
			delete response.reviews
		}; 
		return response
	}

});

function association(variableName, collectionName) {
	return function () {
		if (!this[variableName]){
			this[variableName] = eval("new " + collectionName + "([], { user: this })");
		}
		return this[variableName];
	};
};

XiFinalProject.Models.User = Backbone.Model.extend({
	urlRoot: "api/users",

	reviewedIceCreams: association('_reviewedIceCreams', 'XiFinalProject.Collections.IceCreams'),

	// reviewedIceCreams: function(){
	// 	if (!this._reviewedIceCreams){
	// 		this._reviewedIceCreams = new XiFinalProject.Collections.IceCreams([], {
	// 			user: this
	// 		})
	// 	}
	// 	return this._reviewedIceCreams;
	// },

	refrigeratedIceCreams: association('_refrigeratedIceCreams', 'XiFinalProject.Collections.IceCreams'),

	// refrigeratedIceCreams: function(){
	// 	if (!this._refrigeratedIceCreams){
	// 		this._refrigeratedIceCreams = new XiFinalProject.Collections.IceCreams([], {
	// 			user: this
	// 		})
	// 	}
	// 	return this._refrigeratedIceCreams
	// },

	refrigeratings: association('_refrigeratings', 'XiFinalProject.Collections.Refrigeratings'),

	// refrigeratings: function(){
	// 	if (!this._refrigeratings){
	// 		this._refrigeratings = new XiFinalProject.Collections.Refrigeratings([], {
	// 			user: this
	// 		})
	// 	}
	// 	return this._refrigeratings
	// },

	reviews: association('_reviews', 'XiFinalProject.Collections.Reviews'),

	// reviews: function(){
	// 	if (!this._reviews){
	// 		this._reviews = new XiFinalProject.Collections.Reviews([], {
	// 			user: this
	// 		})
	// 	}
	// 	return this._reviews
	// },

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
	},

	recommendations: function(iceCreams){
		var leftovers = new XiFinalProject.Collections.IceCreams([]);

		if (iceCreams.length === 0){
			return leftovers;
		}
		
		iceCreams.each(function(iceCream){
      if (!this.refrigeratedIceCreams().get(iceCream.id) 
          && !this.reviewedIceCreams().get(iceCream.id)){
        leftovers.add(iceCream)
      }
    }.bind(this));

    var leftoverLength = leftovers.length;
    var recommendedIceCreams = new XiFinalProject.Collections.IceCreams([]);
    var index = Math.floor((Math.random()*leftoverLength) + 1)
    recommendedIceCreams.add(leftovers.at(index-1));
    return recommendedIceCreams;

	}
});

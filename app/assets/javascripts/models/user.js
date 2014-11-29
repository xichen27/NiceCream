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

	niceBoxes: function(){
		if (!this._niceBoxes){
			this._niceBoxes = new XiFinalProject.Collections.NiceBoxes([], {
				user: this
			})
		}
		return this._niceBoxes
	},

	parse: function(response){
		if (response.reviewed_ice_creams){
			this.reviewedIceCreams().set(response.reviewed_ice_creams, {parse: true});
			delete response.reviewed_ice_creams
		} else if (response.nice_boxes){
			this.reviewedIceCreams().set(response.nice_boxes, {parse: true});
			delete response.nice_boxes
		}
		return response
	}

});

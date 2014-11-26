XiFinalProject.Collections.IceCreams = Backbone.Collection.extend({
	url: "/api/ice_creams", 
  model: XiFinalProject.Models.IceCream

});


XiFinalProject.Collections.iceCreams = new XiFinalProject.Collections.IceCreams()

XiFinalProject.Collections.IceCreams = Backbone.Collection.extend({
	url: "/api/ice_creams", 
  model: XiFinalProject.Models.IceCream,

  getOrFetch: function(id){
  	var ice_cream = this.get(id);
  	var that = this;
  	if(!ice_cream){
  		ice_cream = new XiFinalProject.Models.IceCream({id: id})
  		ice_cream.fetch({
  			success: function(){
  				that.add(ice_cream)
  			}
  		})
  	} else {
  		ice_cream.fetch()
  	}
  	return ice_cream
  }

});


XiFinalProject.Collections.iceCreams = new XiFinalProject.Collections.IceCreams()

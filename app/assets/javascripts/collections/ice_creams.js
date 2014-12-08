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
  				that.add(ice_cream, {merge:true})
  			}
  		})
  	} else {
  		ice_cream.fetch()
  	}
  	return ice_cream
  },

  // filters: {
  
  // },

  // filteredResults: function () {
  //   $('.typeahead').typeahead({
  //     hint: true,
  //     highlight: true,
  //     minLength: 1
  //   },
  //   {
  //     name: "flavors",
  //     displayKey: "value",
  //     source: substringMatcher(XiFinalProject.flavors)
  //   });

  //   var substringMatcher = function(strs){
  //     return function findMatches(q, cb){
  //       var matches, substrRegex;
  //       matches = [];
  //       substrRegex = new RegExp(q, "i");
  //       $.each(strs, function(i, str){
  //         if (substrRegex.test(str)){
  //           matches.push({value: str});
  //         }
  //       });
  //       cb(matches);
  //     };
  //   };
   
  //   return matches;
  // },


});


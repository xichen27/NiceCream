XiFinalProject.Routers.Router = Backbone.Router.extend({

	initialize: function(options){
		this.$rootEl = options.$rootEl;
		this.iceCreams = options.iceCreams;
	},

	routes: {
		"": "index",
		"ice_creams/:id": "show"
	},

	index: function(){
		var indexView = new XiFinalProject.Views.IceCreamsIndex({
			collection: this.iceCreams
		});
		this.$rootEl.html(indexView.render().$el)
	},

	show: function(id){
		var iceCream = this.iceCreams.get(id) //getOrFetch

		var showView = new XiFinalProject.Views.IceCreamShow({
			model: iceCream
		})
		this.$rootEl.html(showView.render().$el)
	}
});

XiFinalProject.Routers.Router = Backbone.Router.extend({

	initialize: function(options){
		this.$rootEl = options.$rootEl;
		this.iceCreams = options.iceCreams;
		this.users = options.users;
	},

	routes: {
		"": "index",
		"ice_creams/:id": "show",
		"users/:id": "userShow",
		"users": "usersAll"
	},

	index: function(){
		var indexView = new XiFinalProject.Views.IceCreamsIndex({
			collection: this.iceCreams
		});
		this.$rootEl.html(indexView.render().$el)
	},

	userShow: function(id){
		var user = this.users.getOrFetch(id)
		var userView = new XiFinalProject.Views.UserShow({
			model: user
		})
		this.$rootEl.html(userView.render().$el)
	},

	show: function(id){
		var iceCream = this.iceCreams.getOrFetch(id)
		var showView = new XiFinalProject.Views.IceCreamShow({
			model: iceCream
		})
		this.$rootEl.html(showView.render().$el)
	},

	usersAll: function(){
		var allUsers = new XiFinalProject.Views.UsersIndex({
			collection: this.users
		})
		this.$rootEl.html(allUsers.render().$el)
	}
});

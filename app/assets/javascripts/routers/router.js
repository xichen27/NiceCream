XiFinalProject.Routers.Router = Backbone.Router.extend({

	initialize: function(options){
		this.$rootEl = options.$rootEl;
		this.iceCreams = options.iceCreams;
		this.users = options.users;

		$("#search").submit(function(event){
			event.preventDefault();
			var flavor = $(event.currentTarget).find("pre").text();
			$('.typeahead').typeahead('val', '')
			Backbone.history.navigate("#/search/"+flavor, {trigger: true})
		})
	},


	routes: {
		"": "index",
		"ice_creams/:id": "show",
		"users": "usersAll",
		"users/:id": "userShow",
		"home": "currentUserShow",
		"search/*flavor": "search"
	},

	search: function(flavor){
		var searchIceCreams = this.iceCreams.where({flavor: flavor});
		var searchIceCreamsCollection = new XiFinalProject.Collections.IceCreams([]);
		searchIceCreamsCollection.set(searchIceCreams)
		var searchView = new XiFinalProject.Views.IceCreamsIndex({
			collection: searchIceCreamsCollection
		});
		this._swapView(searchView);
	},

	index: function(){
		var indexView = new XiFinalProject.Views.IceCreamsIndex({
			collection: this.iceCreams
		});
		this._swapView(indexView)
	},

	userShow: function(id){
		var user = this.users.getOrFetch(id)
		var userView = new XiFinalProject.Views.UserShow({
			model: user,
			iceCreams: this.iceCreams,
		})
		this._swapView(userView)
	},

	currentUserShow: function(){
		var userView = new XiFinalProject.Views.UserShow({
			model: XiFinalProject.currentUser,
			iceCreams: this.iceCreams
		});
		this._swapView(userView)
	},

	show: function(id){
		var iceCream = this.iceCreams.getOrFetch(id)
		var showView = new XiFinalProject.Views.IceCreamShow({
			model: iceCream,
			users: this.users
		})
		this._swapView(showView)
	},

	usersAll: function(){
		var allUsers = new XiFinalProject.Views.UsersIndex({
			collection: this.users
		})
		this._swapView(allUsers)
	},

	_swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  },
});

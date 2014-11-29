XiFinalProject.Views.UsersIndex = Backbone.View.extend({

  template: JST['users/index'],

  initialize: function(){
  	this.listenTo(this.collection, "sync", this.render);
  },

  render: function(){
  	var content = this.template({users: this.collection});
  	this.$el.html(content);
  	return this;
  }

});

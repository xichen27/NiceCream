XiFinalProject.Views.IceCreamShow = Backbone.View.extend({

  template: JST['ice_creams/show'],

  initialize: function(){
  	this.listenTo(this.model, "sync", this.render);
  },

  render: function(){
  	var content = this.template({ice_cream: this.model});
  	this.$el.html(content);
  	return this;
  }

});

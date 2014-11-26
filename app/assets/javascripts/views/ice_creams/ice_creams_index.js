XiFinalProject.Views.IceCreamsIndex = Backbone.CompositeView.extend({

  template: JST['ice_creams/index'],

  initialize: function(){
  	this.listenTo(this.collection, "sync", this.render);
  	this.listenTo(this.collection, "add", this.addIceCream)
  	this.collection.each(function(iceCream){
  		this.addIceCream(iceCream)
  	}.bind(this))
  },

  addIceCream: function(iceCream){
  	var iceCreamItem = new XiFinalProject.Views.IceCreamsIndexItem({model: iceCream})
  	this.addSubview("#ice-cream-list", iceCreamItem)
  }, 

  render: function(){
  	var content = this.template();
  	this.$el.html(content);
  	this.attachSubviews();
  	return this;
  }

});

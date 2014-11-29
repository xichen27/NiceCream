XiFinalProject.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  initialize: function(){
    this.reviewedIceCreams = this.model.reviewedIceCreams();
    this.listenTo(this.model, "sync", this.render);
  	// this.listenTo(this.reviewedIceCreams, "sync", this.render);
  	this.listenTo(this.reviewedIceCreams, "add", this.addReviewedIceCream);
  	this.reviewedIceCreams.each(function(reviewedIceCream){
  		this.addReviewedIceCream(reviewedIceCream)
  	}.bind(this))
  },

  addReviewedIceCream: function(reviewedIceCream){
  	var reviewItem = new XiFinalProject.Views.IceCreamsIndexItem({model: reviewedIceCream})
  	this.addSubview("div.reviewed-ice-creams", reviewItem)
  },

  render: function(){
  	var content = this.template({user: this.model});
  	this.$el.html(content);
  	this.attachSubviews()
  	return this;
  }

});
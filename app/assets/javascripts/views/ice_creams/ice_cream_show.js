XiFinalProject.Views.IceCreamShow = Backbone.CompositeView.extend({

  template: JST['ice_creams/show'],

  initialize: function(){
  	this.reviews = this.model.reviews();
  	this.listenTo(this.model, "sync", this.render);
  	this.listenTo(this.reviews, "sync", this.render);
  	this.listenTo(this.reviews, "add", this.addReview);
  	this.reviews.each(function(review){
  		this.addReview(review)
  	}.bind(this))
  },

  addReview: function(review){
  	var reviewItem = new XiFinalProject.Views.ReviewIndexItem({model: review})
  	this.addSubview(".reviews-list", reviewItem)
  },

  render: function(){
  	var content = this.template({ice_cream: this.model});
  	this.$el.html(content);
  	this.attachSubviews()
  	return this;
  }

});



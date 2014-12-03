
XiFinalProject.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  initialize: function(options){
    var reviews = this.model.reviews();
    var refrigeratedIceCreams = this.model.refrigeratedIceCreams();
    this.iceCreams = options.iceCreams;
    // this.listenTo(this.model, "sync", this.render);

  	this.listenTo(reviews, "add sync", this.addReview);
    this.listenTo(refrigeratedIceCreams, "add sync", this.addRefrigeratedIceCream);

  	reviews.each(function(review){
  		this.addReview(review)
  	}.bind(this));

    refrigeratedIceCreams.each(function(refrigeratedIceCream){
      this.addRefrigeratedIceCream(refrigeratedIceCream)
    }.bind(this));
    view = this;
  },

  addReview: function(review){
    var iceCreamID = review.get("ice_cream_id");
    var iceCream = this.iceCreams.getOrFetch(iceCreamID);
  	var reviewShow = new XiFinalProject.Views.UserReviewIndexItem({ 
      model: review, 
      iceCream: iceCream
    })
  	this.addSubview("div.reviewed-ice-creams", reviewShow)
  },

  addRefrigeratedIceCream: function(refrigeratedIceCream){
    var reviewItem = new XiFinalProject.Views.IceCreamsIndexItem({
      model: refrigeratedIceCream
    });
    this.addSubview("div.refrigerated-ice-creams", reviewItem)
  },

  render: function(){
  	var content = this.template({
      user: this.model, 
      currentUser: XiFinalProject.currentUser
    });
  	this.$el.html(content);
  	this.attachSubviews()
  	return this;
  }

});

XiFinalProject.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  initialize: function(options){
    this.reviewedIceCreams = this.model.reviewedIceCreams();
    this.refrigeratedIceCreams = this.model.refrigeratedIceCreams();
    this.listenTo(this.model, "sync", this.render);
  	// this.listenTo(this.reviewedIceCreams, "sync", this.render);
  	this.listenTo(this.reviewedIceCreams, "add", this.addReviewedIceCream);
    this.listenTo(this.refrigeratedIceCreams, "add", this.addRefrigeratedIceCream);

  	this.reviewedIceCreams.each(function(reviewedIceCream){
  		this.addReviewedIceCream(reviewedIceCream)
  	}.bind(this));

    this.refrigeratedIceCreams.each(function(refrigeratedIceCream){
      this.addRefrigeratedIceCream(refrigeratedIceCream)
    }.bind(this));
  },

  addReviewedIceCream: function(reviewedIceCream){
  	var reviewItem = new XiFinalProject.Views.IceCreamsIndexItem({
      model: reviewedIceCream, 
      currentUser: XiFinalProject.currentUser
    })
  	this.addSubview("div.reviewed-ice-creams", reviewItem)
  },

  addRefrigeratedIceCream: function(refrigeratedIceCream){
    var reviewItem = new XiFinalProject.Views.IceCreamsIndexItem({
      model: refrigeratedIceCream,
      currentUser: XiFinalProject.currentUser
    })
    this.addSubview("div.refrigerated-ice-creams", reviewItem)
  },

  render: function(){
  	var content = this.template({
      user: this.model, 
      currentUser: XiFinalProject.currentUser});
  	this.$el.html(content);
  	this.attachSubviews()
  	return this;
  }

});
XiFinalProject.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  initialize: function(options){
    this.currentUser = options.currentUser
    this.reviewedIceCreams = this.model.reviewedIceCreams();
    // this.niceBoxes = this.model.niceBoxes();
    this.refrigeratedIceCreams = this.model.refrigeratedIceCreams();
    this.listenTo(this.model, "sync", this.render);
  	// this.listenTo(this.reviewedIceCreams, "sync", this.render);
  	this.listenTo(this.reviewedIceCreams, "add", this.addReviewedIceCream);
    // this.listenTo(this.niceBoxes, "add", this.addNiceBox);
    this.listenTo(this.refrigeratedIceCreams, "add", this.addRefrigeratedIceCream);

  	this.reviewedIceCreams.each(function(reviewedIceCream){
  		this.addReviewedIceCream(reviewedIceCream)
  	}.bind(this));

    this.refrigeratedIceCreams.each(function(refrigeratedIceCream){
      this.addRefrigeratedIceCream(refrigeratedIceCream)
    }.bind(this));

    // this.niceBoxes.each(function(niceBox){
    //   this.addNiceBox(niceBox)
    // }.bind(this));
  },

  addReviewedIceCream: function(reviewedIceCream){
  	var reviewItem = new XiFinalProject.Views.IceCreamsIndexItem({model: reviewedIceCream})
  	this.addSubview("div.reviewed-ice-creams", reviewItem)
  },

  addRefrigeratedIceCream: function(refrigeratedIceCream){
    var reviewItem = new XiFinalProject.Views.IceCreamsIndexItem({model: refrigeratedIceCream})
    this.addSubview("div.refrigerated-ice-creams", reviewItem)
  },

  // addNiceBox: function(niceBox){
  //   var niceBoxItem = new XiFinalProject.Views.NiceBoxIndexItem({model: niceBox})
  //   this.addSubview("div.my-nice-box", niceBoxItem)
  // },

  render: function(){
  	var content = this.template({user: this.model, currentUser: this.currentUser});
  	this.$el.html(content);
  	this.attachSubviews()
  	return this;
  }

});
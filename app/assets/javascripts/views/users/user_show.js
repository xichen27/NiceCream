XiFinalProject.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  initialize: function(options){
    var reviews = this.model.reviews();
    this.refrigeratedIceCreams = this.model.refrigeratedIceCreams();
    this.iceCreams = options.iceCreams;
    // this.listenTo(this.model, "sync", this.render);

    this.listenTo(reviews, "add", this.addReview);
    this.listenTo(this.refrigeratedIceCreams, "add", this.addRefrigeratedIceCream);
    this.listenTo(this.refrigeratedIceCreams, "remove", this.removeRefrigeratedIceCream);

    reviews.each(function(review){
      this.addReview(review)
    }.bind(this));

    this.refrigeratedIceCreams.each(function(refrigeratedIceCream){
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

  removeRefrigeratedIceCream: function(iceCream){
    var removalIceCream = _.find(this.subviews("div.refrigerated-ice-creams"), function(subview){
      return subview.model === iceCream
    });
    this.removeSubview("div.refrigerated-ice-creams", removalIceCream)
  },

  // removeCard: function(card){
  //   var remove_card = _.find(this.subviews(".cards-list"), function(subview){
  //     return subview.model === card;
  //   });
  //   this.removeSubview(".cards-list", remove_card)
  // },

  addRefrigeratedIceCream: function(refrigeratedIceCream){
    var reviewItem = new XiFinalProject.Views.IceCreamsIndexItem({
      model: refrigeratedIceCream,
      collection: this.iceCreams
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


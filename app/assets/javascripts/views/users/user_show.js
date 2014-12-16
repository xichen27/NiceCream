XiFinalProject.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  initialize: function(options){
    var reviews = this.model.reviews();
    this.refrigeratedIceCreams = this.model.refrigeratedIceCreams();
    this.iceCreams = options.iceCreams;

    this.iceCreams.fetch({
      success: function (response) {
        this.model.fetch({
          success: function (response) {
            this.addAllRecommended();
          }.bind(this)
        })
      }.bind(this)
    })

    this.listenTo(reviews, "add", this.addReview);
    this.listenTo(this.refrigeratedIceCreams, "add", this.addRefrigeratedIceCream);
    this.listenTo(this.refrigeratedIceCreams, "remove", this.removeRefrigeratedIceCream);

    this.listenTo(this.model, "sync", this.render)

    reviews.each(function(review){
      this.addReview(review)
    }.bind(this));

    this.refrigeratedIceCreams.each(function(refrigeratedIceCream){
      this.addRefrigeratedIceCream(refrigeratedIceCream)
    }.bind(this));
    view = this;


    // this.addAllRecommended();
  },

  events: {

    "submit form": "updateImage",
    // "click #next": "refresh",
    "click button": "selectRecommended"
  },

  updateImage: function(event){
    event.preventDefault();
    var newImageUrl = $(event.currentTarget).serializeJSON().image.url;
    var that = this;
    this.model.set({"avatar_url": newImageUrl});
    this.model.save({}, {
      success: function(){
        $('#myModal').modal('hide');
        $("body").removeClass("modal-open");
      }
    });
  },

  // refresh: function(){
  //   this.addAllRecommended()
  // },

  addAllRecommended: function(){
    this.model.recommendations(this.iceCreams).each(function(recommendedIceCream){
      this.addRecommendedIceCream(recommendedIceCream)
    }.bind(this));
  },

  selectRecommended: function(event){
    event.preventDefault();
    var iceCreamID = $(event.currentTarget).data("ice-cream-id");
    var removalIceCream = _.find(this.subviews("div.recommended-ice-creams"), function(subview){
      return subview.model.id === iceCreamID
    });
    this.removeSubview("div.recommended-ice-creams", removalIceCream);
    
    var availableIceCreams = this.iceCreams;

    this.addAllRecommended();
  },

  addRecommendedIceCream: function(recommendedIceCream){
      var recommendedItem = new XiFinalProject.Views.IceCreamsIndexItem({
      model: recommendedIceCream,
      collection: this.iceCreams
    });
    this.addSubview("div.recommended-ice-creams", recommendedItem)
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
    this.attachSubviews();
    setTimeout(function(){
      filepicker.constructWidget(this.$('.fp-new-avatar')); 
    }.bind(this), 0)

    return this;
  }

});

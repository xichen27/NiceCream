window.XiFinalProject = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	var iceCreams = new XiFinalProject.Collections.IceCreams();
  	iceCreams.fetch();
    var users = new XiFinalProject.Collections.Users();
    users.fetch();

    this.currentUser = new XiFinalProject.Models
          .User(JSON.parse(_currentUserJSON));
    this.currentUser.fetch();

    new XiFinalProject.Routers.Router({
    	$rootEl: $("#main"),
    	iceCreams: iceCreams,
      users: users
      // currentUser: currentUser
    });
    Backbone.history.start()
  }

};

$(document).ready(function(){
  XiFinalProject.initialize();
  installTypeahead();
});



function installTypeahead () {
  // do your thing
}
Backbone.CompositeView = Backbone.View.extend({
  addSubview: function (selector, subview) {
    this.subviews(selector).push(subview);
    this.attachSubview(selector, subview);
  },

  attachSubview: function (selector, subview) {
    this.$(selector).append(subview.render().$el);

    subview.delegateEvents();

    if (subview.attachSubviews) {
      subview.attachSubviews();
    }
  },

  attachSubviews: function () {

    var view = this;
    _(this.subviews()).each(function (subviews, selector) {
      view.$(selector).empty();
      _(subviews).each(function (subview) {
        view.attachSubview(selector, subview);
      });
    });
  },

  onRender: function(){
    var views = this;
    _(this.subviews()).each(function(subviews, selector){
      _(subviews).each(function(subview){
        if(subview.onRender){
          subview.onRender();
        }
      })
    })
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subview) {
        subview.remove();
      });
    });
  },

  removeSubview: function (selector, subview) {
    subview.remove();

    var subviews = this.subviews(selector);
    subviews.splice(subviews.indexOf(subview), 1);
  },

  subviews: function (selector) {
    this._subviews = this._subviews || {};

    if (!selector) {
      return this._subviews;
    } else {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector];
    }
  }
});
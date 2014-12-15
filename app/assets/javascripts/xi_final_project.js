window.XiFinalProject = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	var iceCreams = new XiFinalProject.Collections.IceCreams(JSON.parse(_iceCreamsJSON));
    iceCreams.fetch();
    var users = new XiFinalProject.Collections.Users(JSON.parse(_usersJSON));
    users.fetch();
    this.currentUser = new XiFinalProject.Models
          .User(JSON.parse(_currentUserJSON));
    this.currentUser.fetch();

    this.flavors = flavors;

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
  $('.typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: "flavors",
    displayKey: "value",
    source: substringMatcher(flavors)
  });
};

var substringMatcher = function(strs){
  return function findMatches(q, cb){
    var matches, substrRegex;
    matches = [];
    substrRegex = new RegExp(q, "i");
    $.each(strs, function(i, str){
      if (substrRegex.test(str)){
        matches.push({value: str});
      }
    });
    cb(matches);
  };
};



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
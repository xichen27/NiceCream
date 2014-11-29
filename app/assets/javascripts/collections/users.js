XiFinalProject.Collections.Users = Backbone.Collection.extend({
	url: "api/users",
	model: XiFinalProject.Models.User,

	 getOrFetch: function (id) {
    var user = this.get(id);

    if(!user) {
      var user = new XiFinalProject.Models.User({ id: id });
      var that = this
      user.fetch({
        success: function () {
          that.add(user);
        }
      });
    } else {
      user.fetch();
    }

    return user;
  }
})


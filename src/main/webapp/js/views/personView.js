app.PersonView = Backbone.View.extend({
	template: _.template($('#PersonView').html()),
	render:function() {
		this.$el.html(this.template());
		return this;
	}
});
app.PersonView = Backbone.Epoxy.View.extend({
	template : _.template($('#PersonView').html()),
	initialize: function() {
		this.model = new app.Person();
	},
	events: {
		'click .btn-search': 'search',
		'keyup .panel-body :input': 'searchKey'
	},
	searchKey: function(e) {
		if(e.which === 13){
			this.search();
		}
	},
	search: function() {
		var that = this;
		this.collectionPrincipal = new app.People();
		this.collectionPrincipal.search({
			data: this.model,
			success: function() {
				var personTableView = new app.PersonTableView({
					collection : that.collectionPrincipal
				});
				
				that.$el.find(".list-person-container").html(personTableView.render().el);
			},
			error: function() {
				
			}
		});
	},
	render : function() {
		var that = this;
		this.$el.html(this.template());
		this.collectionPrincipal = new app.People();
		this.collectionPrincipal.fetch({
			success: function() {
				var personTableView = new app.PersonTableView({
					collection : that.collectionPrincipal,
				});
				
				that.$el.find(".list-person-container").html(personTableView.render().el);
			},
			error: function() {
				
			}
		});


		this.applyBindings();
		return this;
	}
});

app.PersonTableView = Backbone.View.extend({
	template : _.template($('#tablePerson').html()),

	initialize : function(opt) {
		this.collection = opt.collection;
	},

	render : function() {
		var that = this;
		this.$el.html(this.template());
		this.$el.find('.rows-person-container').html("");

		this.collection.each(function(personModel) {

			var novaLinha = new app.PersonTableItemView({
				model : personModel,
			});

			that.$el.find('.rows-person-container').append(novaLinha.render().$el);
		})
		return this;
	}
});

app.PersonTableItemView = Backbone.View.extend({
	tagName : "tr",
	template : _.template($("#PersonTableItemView").html()),
	initialize : function(opt) {
	},
	events : {
		'click .btn-delete-person': 'clickDelete'
	},
	clickDelete : function() {
		var that = this;
		this.model.destroy({
			success: function() {
				that.$el.remove();
			}
		});
	},
	render : function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}

});

app.PersonFormView = Backbone.Epoxy.View.extend({
	template : _.template($("#PersonFormView").html()),
	initialize : function(opt) {
		this.router = new app.Router();
	},
	events : {
		'click .btn-save': 'clickSave',
	},
	clickSave : function() {
		var that = this;
		this.model.save({},{
			success: function() {
				that.router.navigate("app/person", true);
			}
		});
	},
	render : function() {
		var that = this;
		that.$el.html(that.template());
		this.applyBindings();
		return this;
	}
	
});
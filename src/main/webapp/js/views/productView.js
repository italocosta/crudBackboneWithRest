app.ProductView = Backbone.Epoxy.View.extend({
	template : _.template($('#ProductView').html()),
	initialize: function() {
		this.model = new app.Product();
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
		this.collectionPrincipal = new app.Products();
		this.collectionPrincipal.search({
			data: this.model,
			success: function() {
				var productTableView = new app.ProductTableView({
					collection : that.collectionPrincipal
				});
				
				that.$el.find(".list-product-container").html(productTableView.render().el);
			},
			error: function() {
				
			}
		});
	},
	render : function() {
		var that = this;
		this.$el.html(this.template());
		this.collectionPrincipal = new app.Products();
		this.collectionPrincipal.fetch({
			success: function() {
				var productTableView = new app.ProductTableView({
					collection : that.collectionPrincipal,
				});
				
				that.$el.find(".list-product-container").html(productTableView.render().el);
			},
			error: function() {
				
			}
		});


		this.applyBindings();
		return this;
	}
});

app.ProductTableView = Backbone.View.extend({
	template : _.template($('#tableProduct').html()),

	initialize : function(opt) {
		this.collection = opt.collection;
	},

	render : function() {
		var that = this;
		this.$el.html(this.template());
		this.$el.find('.rows-product-container').html("");

		this.collection.each(function(productModel) {

			var novaLinha = new app.ProductTableItemView({
				model : productModel,
			});

			that.$el.find('.rows-product-container').append(novaLinha.render().$el);
		})
		return this;
	}
});

app.ProductTableItemView = Backbone.View.extend({
	tagName : "tr",
	template : _.template($("#ProductTableItemView").html()),
	initialize : function(opt) {
	},
	events : {
		'click .btn-delete-product': 'clickDelete'
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

app.ProductFormView = Backbone.Epoxy.View.extend({
	template : _.template($("#ProductFormView").html()),
	initialize : function(opt) {
	},
	events : {
		'click .btn-save': 'clickSave',
	},
	clickSave : function() {
		var that = this;
		this.model.save({},{
			success: function() {
				app.goPage("app/product");
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
var app = {
	views : {},
	models : {}
};

app.selectMenuItem = function(menuItem) {
	$('.navbar .nav li').removeClass('active');
	if (menuItem) {
		$('.' + menuItem).addClass('active');
	}
};
app.getTemplate = function(nome) {
	var that = this;
	return $.get('templates/' + nome + '.html', function(data) {
		template = _.template(data, {});
		this.$el.html(template(that.model.toJSON()));
	}, 'html');
}
app.Router = Backbone.Router.extend({

	routes : {
		"" : "product",
		"app/" : "product",
		"app/product" : "product",
		"app/product/:id" : "productEdit",
		"app/productAdd" : "productAdd",
		
		"app/person" : "person",
		"app/person/:id" : "personEdit"
	},

	initialize : function() {
		this.$content = $("#content");
	},
	person : function() {
		app.personView = new app.PersonView();
		app.personView.render();
		this.$content.html(app.personView.el);
		app.selectMenuItem('person-menu');
	},
	product : function() {
		app.productView = new app.ProductView();
		app.productView.render();
		this.$content.html(app.productView.el);
		app.selectMenuItem('product-menu');
	},
	productAdd : function() {
		var that = this;
		this.model = new app.Product();
		app.productFormView = new app.ProductFormView({
			model : that.model
		});
		app.productFormView.render();
		app.productFormView.$el.find('#id').parent().remove();
		app.productFormView.$el.find('#descricao').parent().removeClass('col-lg-10').addClass('col-lg-12');
		that.$content.html(app.productFormView.el);
	},
	productEdit : function(id) {
		var that = this;
		this.model = new app.Product({id: id});
		this.model.fetch({
			success: function() {
				app.productFormView = new app.ProductFormView({
					model : that.model
				});
				app.productFormView.render();
				that.$content.html(app.productFormView.el);
			}
		});
	}

});

$(document).on("ready", function() {
	app.router = new app.Router();
	Backbone.history.start();
});

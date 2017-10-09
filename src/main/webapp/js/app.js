var app = {
	views : {},
	models : {}
};
app.replaceAll = function(str,find,replace){
    if(str.indexOf(find)>0){
        str = str.replace(find,replace);
        return app.replaceAll(str,find,replace);
    }
    return str;
};
app.selectMenuItem = function(menuItem) {
	$('.navbar .nav li').removeClass('active');
	if (menuItem) {
		$('.' + menuItem).addClass('active');
	}
};
app.goListProduct = function() {
	var content = $('#content');
	app.productView = new app.ProductView();
	app.productView.render();
	content.html(app.productView.el);
	app.selectMenuItem('product-menu');
};
app.goListPerson = function() {
	var content = $('#content');
	app.personView = new app.PersonView();
	app.personView.render();
	content.html(app.personView.el);
	app.selectMenuItem('person-menu');
};
app.goPage= function(hash,target) {
	if(target){
		window.open(hash,'_blank')
	}else{
		window.location.hash = hash;
	}
};
app.Router = Backbone.Router.extend({

	routes : {
		"" : "product",
		"app/" : "product",
		"app/product" : "product",
		"app/product/:id" : "productEdit",
		"app/productAdd" : "productAdd",
		
		"app/person" : "person",
		"app/person/:id" : "personEdit",
		"app/personAdd" : "personAdd"
	},

	initialize : function() {
		this.$content = $("#content");
	},
	person : function() {
		app.goListPerson();
	},
	personAdd : function() {
		var that = this;
		this.model = new app.Person();
		app.personFormView = new app.PersonFormView({
			model : that.model
		});
		app.personFormView.render();
		app.personFormView.$el.find('#id').parent().remove();
		app.personFormView.$el.find('#name').parent().removeClass('col-lg-10').addClass('col-lg-12');
		that.$content.html(app.personFormView.el);
	},
	personEdit : function(id) {
		var that = this;
		this.model = new app.Person({id: id});
		this.model.fetch({
			success: function() {
				app.personFormView = new app.PersonFormView({
					model : that.model
				});
				app.personFormView.render();
				that.$content.html(app.personFormView.el);
			}
		});
	},
	product : function() {
		app.goListProduct();
	},
	productAdd : function() {
		var that = this;
		this.model = new app.Product();
		app.productFormView = new app.ProductFormView({
			model : that.model
		});
		app.productFormView.render();
		app.productFormView.$el.find('#id').parent().remove();
		app.productFormView.$el.find('#description').parent().removeClass('col-lg-10').addClass('col-lg-12');
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

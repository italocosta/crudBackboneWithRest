app.Product = Backbone.Epoxy.Model.extend({
	urlRoot : 'rs/produtos',
	defaults : {
		id : '',
		descricao : '',
		categoria : '',
		preco : '',
		quantidade : ''
	},
	initialize: function() {
		if(!this.get('id')){
			this.set('id',null);
		}
		return this.get('id');
	}
});

app.Products = Backbone.Collection.extend({
	url : 'rs/produtos',
	model: app.Product
});
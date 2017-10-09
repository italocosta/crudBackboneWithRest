app.Product = Backbone.Epoxy.Model.extend({
	urlRoot : 'rs/produtos',
	defaults : {
		id : null,
		description : null,
		category : null,
		price : null,
		quantity : null
	},
	initialize : function() {
		if (!this.get('id')) {
			this.set('id', null);
		}
		return this.get('id');
	}
});

app.Products = Backbone.Collection.extend({
	url : 'rs/produtos',
	model : app.Product,
	initialize : function(opt) {
	},
	getValueNull: function(val) {
		if(!val || val == '' || val == undefined){
			return 'null';
		}
		return val;
	},
	search : function(options) {
		var that = this;
		options || (options = {});
		var data = (options.data || {});
		data = data.toJSON();
		options.url = this.url+
		              '/'+this.getValueNull(data.id)+
		              '/'+this.getValueNull(data.description)+
		              '/'+this.getValueNull(data.category)+
		              '/'+this.getValueNull(data.price)+
		              '/'+this.getValueNull(data.quantity);
		options.data = null;

		return Backbone.Collection.prototype.fetch.call(this, options);
	}
		
});
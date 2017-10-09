app.Person = Backbone.Epoxy.Model.extend({
	urlRoot : 'rs/pessoas',
	defaults : {
		id : null,
		cpf : null,
		name : null,
		dateBirthday : null
	},
	initialize : function() {
		if (!this.get('id')) {
			this.set('id', null);
		}
		return this.get('id');
	}
	
});

app.People = Backbone.Collection.extend({
	url : 'rs/pessoas',
	model : app.Person,
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
		data.dateBirthday = app.replaceAll(data.dateBirthday,'/','.');
		options.url = this.url+
		              '/'+this.getValueNull(data.id)+
		              '/'+this.getValueNull(data.cpf)+
		              '/'+this.getValueNull(data.name)+
		              '/'+this.getValueNull(data.dateBirthday);
		options.data = null;

		return Backbone.Collection.prototype.fetch.call(this, options);
	}
		
});
app.Person = Backbone.Model.extend({
	urlRoot : 'rs/pessoas',
	defaults : {
		id : '',
		cpf : '',
		nome : '',
		dataNascimento : ''
	},
	idAttribute: 'id'
});
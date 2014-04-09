var ViewPerson = Backbone.View.extend({
	tagName: "li",

	template: _.template($("#tpl_name").html()),

	events: {
        "click": "showEdit"
	},

	render: function() {
		this.$el.append(this.template(this.model.toJSON()));
		return this;
	},

	showEdit: function() {
		mediator.pub("editCurrent", this.model);	
	}

});



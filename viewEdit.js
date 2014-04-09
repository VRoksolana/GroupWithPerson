var ViewEdit = Backbone.View.extend({

	templates: {
		"edit": _.template($("#tpl_edit").html()),
		"info": _.template($("#tpl_info").html())
	},

	events: {
		"click #tab1": "showTab1",
		"click #tab2": "showTab2",
		"click #tab3": "showTab3",
		"click #bt_preview": "showInfo",
		"click #bt_edit": "returnEdit",
		"click #bt_save": "savePerson"
	},

	initialize: function() {
		mediator.sub("editCurrent", this.showEdit, this);
		mediator.sub("editNew", this.showEdit, this);
	},	

	showEdit: function(person) {
		this.model = person;
		this.render("edit");
	},

	render: function(key) {
		this.$el.html(this.templates[key](this.model.toJSON()));
		return this;
	},

	showInfo: function() {
		var info = {};

		$("#tab_content input").each(function(i, el) {
            info[el.id] = $(el).val();
        });

		this.model.set(info);
		this.render("info");
	},

	returnEdit: function() {
		this.render("edit");
	},

	savePerson: function() {
		mediator.pub("save", this.model);
	},

	showTab1: function() {
		var active_tab = $(".active");
		this.changeTabs(active_tab, "#tab1", ".tab1");
	},

	showTab2: function() {
		var active_tab = $(".active");
		this.changeTabs(active_tab, "#tab2", ".tab2");
	},

	showTab3: function() {
		var active_tab = $(".active");
		this.changeTabs(active_tab, "#tab3", ".tab3");
	},
	
	changeTabs: function(active_tab, new_tab, new_page) {
		active_tab.removeClass("active");
		$("." + active_tab.attr("id")).addClass("hidden");
		$(new_tab).addClass("active");
		$(new_page).removeClass("hidden");		
	}
});
var ViewGroup = Backbone.View.extend({

    template: _.template($("#tpl_group").html()),

    events: {
        "click #bt_add": "addNewPerson"
    },

    initialize: function() {
        this.collection = new GroupPerson();
        this.render();

        this.collection.on("add", this.addOne, this);
        mediator.sub("save", this.savePerson, this);
    },

    render: function() {
        this.$el.html(this.template());
        this.collection.each(this.addOne, this);
    },

    addOne: function(person) {
        var view = new ViewPerson({model: person});	
        
        this.$el.find(".list").append(view.render().el);	
    },

    savePerson: function(person) {
        this.render();
        if (!this.existPerson(person["id"])) {
            this.collection.add(person);
        }       
    },

    existPerson: function(id_person) {
        return this.collection.findWhere({id: id_person})
                ? true: false;
    },

    addNewPerson: function() {
        var id_person = this.collection.length + 1,
            person = new Person({id: id_person});

        mediator.pub("editNew", person);
    }

});
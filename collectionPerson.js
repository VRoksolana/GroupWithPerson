var GroupPerson = Backbone.Collection.extend({
	model: Person,
	
	list: [
			"Андрей",
			"Богдан",
			"Георг",
			"Надежда",
			"Роксолана",
			"Сергей",
			"Юлия"
		   ],


	initialize: function() {
		var i;

		for(i = 0; i < this.list.length; i++) {
		this.add({name: this.list[i],
						id: i+1});
		}
	}

});

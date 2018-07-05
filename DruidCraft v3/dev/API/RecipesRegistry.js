var RecipeRegistry = {

    recipesRack: [],
	recipesAltar: [],

   recipesRackRecipe: function (recipe) {
        this.recipesRack.push(recipe);
    },

    getRackRecipe: function (id, data) {
        for (var key in this.recipesRack) {
            var recipe = this.recipesRack[key];
            if (recipe.input.id === id && recipe.input.data === data) {
                return recipe;
            }
        }
    },
	
	recipesAltarRecipe: function (recipe) {
        this.recipesAltar.push(recipe);
    },
	
   getAltarRecipe: function (input) {
         for (var i = 0; i < this.recipesAltar.length; i++) {

            if (input[0].id == this.recipesAltar[i].Source1.id) {
                if (input[0].data == this.recipesAltar[i].Source1.data) {
                    if (input[0].count >= this.recipesAltar[i].Source1.count) {

                        if (input[1].id == this.recipesAltar[i].Source2.id) {
                            if (input[1].data == this.recipesAltar[i].Source2.data) {
                                if (input[1].count >= this.recipesAltar[i].Source2.count) {
									
	 if (input[2].id == this.recipesAltar[i].Source3.id) {
                            if (input[2].data == this.recipesAltar[i].Source3.data) {
                                if (input[2].count >= this.recipesAltar[i].Source3.count) {
									
									 if (input[3].id == this.recipesAltar[i].Source4.id) {
                            if (input[3].data == this.recipesAltar[i].Source4.data) {
                                if (input[3].count >= this.recipesAltar[i].Source4.count) {
									
									 if (input[4].id == this.recipesAltar[i].Source5.id) {
                            if (input[4].data == this.recipesAltar[i].Source5.data) {
                                if (input[4].count >= this.recipesAltar[i].Source5.count) {
									
									 if (input[5].id == this.recipesAltar[i].Source6.id) {
                            if (input[5].data == this.recipesAltar[i].Source6.data) {
                                if (input[5].count >= this.recipesAltar[i].Source6.count) {
									
									 if (input[6].id == this.recipesAltar[i].Source7.id) {
                            if (input[6].data == this.recipesAltar[i].Source7.data) {
                                if (input[6].count >= this.recipesAltar[i].Source7.count) {
									
				 if (input[7].id == this.recipesAltar[i].Source8.id) {
                            if (input[7].data == this.recipesAltar[i].Source8.data) {
                                if (input[7].count >= this.recipesAltar[i].Source8.count) {
									
                                    return this.recipesAltar[i];

                                }
							}
				 }
								}
							}
									 }
								}
							}
									 }
								}
							}
									 }
								}
							}
									 }
								}
								
							}
	 }
								}
							}
						}
					}
				}
			}

        }
	  }		
};

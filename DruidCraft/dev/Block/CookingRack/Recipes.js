if(__config__.access("Hard Mode") == false){
RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runeocean, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 0.2},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.7},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 0.7}
});

RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runeswamp, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 0.3},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.7},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 0.9}
});

RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runehell, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 1},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.3},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 0.5}
});

RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runedesert, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 0.6},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.5},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 1}
});
}

if(__config__.access("Hard Mode") == true){
	RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runeocean, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 0.2},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.6},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 0.6}
});

RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runeswamp, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 0.1},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.3},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 0.6}
});

RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runehell, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 0.6},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.3},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 0.3}
});

RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runedesert, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 0.4},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.3},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 0.5}
});
}
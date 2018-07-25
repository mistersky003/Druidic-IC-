ModAPI.registerAPI("DruidicAPI", {
	RuneRegistry: RuneRegistry,
	RecipeRegistry: RecipeRegistry,
	ItemInfo: ItemInfo,
	
	requireGlobal: function(command){
		return eval(command);
	}
});

Logger.Log("Druidic API shared for mods", "API");

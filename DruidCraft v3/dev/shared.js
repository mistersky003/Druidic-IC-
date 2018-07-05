ModAPI.registerAPI("DruidicAPI", {
	RuneRegistry: RuneRegistry,
	RecipeRegistry: RecipeRegistry,
	
	requireGlobal: function(command){
		return eval(command);
	}
});

Logger.Log("Druidic API shared for mods", "API");

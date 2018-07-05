/*Base Rune*/
RuneRegistry.registerRune({
RuneID: "runeswamp",
Name: "Rune swamp",
Texture: "runeswamp",
});

RuneRegistry.registerRune({
RuneID: "runeocean",
Name: "Rune ocean",
Texture: "runeocean",
});

RuneRegistry.registerRune({
RuneID: "runehell",
Name: "Rune Hell",
Texture: "runehell",
});

RuneRegistry.registerRune({
RuneID: "runedesert",
Name: "Rune desert",
Texture: "runedesert",
});
/*Other Rune*/
RuneRegistry.registerRune({
RuneID: "runaboli",
Name: "Rune pain",
Texture: "runaboli",
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.runehell, data: 0, count: 1},
	Source2: {id: empty, data: 0, count: 0},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: empty, data: 0, count: 0},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: ItemID.ingotSilver, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.runaboli, data: 0, count: 1}
});

RuneRegistry.registerRune({
RuneID: "runastraha",
Name: "Rune of fear",
Texture: "runastraha",
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.runehell, data: 0, count: 1},
	Source2: {id: empty, data: 0, count: 0},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: empty, data: 0, count: 0},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: ItemID.ingotCobolt, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.runastraha, data: 0, count: 1}
});

RuneRegistry.registerRune({
RuneID: "runestranght",
Name: "Rune stranght",
Texture: "runestranght",
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.runehell, data: 0, count: 1},
	Source2: {id: empty, data: 0, count: 0},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: empty, data: 0, count: 0},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.runestranght, data: 0, count: 1}
});

RuneRegistry.registerRune({
RuneID: "runeThor",
Name: "Rune Thor",
Texture: "runeThor",
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.runaboli, data: 0, count: 1},
	Source2: {id: ItemID.runastraha, data: 0, count: 1},
	Source3: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.runestranght, data: 0, count: 1},
	Source6: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.runeThor, data: 0, count: 1}
});

RuneRegistry.registerRune({
RuneID: "runeOdin",
Name: "Rune Odin",
Texture: "runeOdin",
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.runeThor, data: 0, count: 1},
	Source2: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.runeOdin, data: 0, count: 1}
});

if(__config__.access("Hard Mode") == true){
//rune swamp
RuneRegistry.dropMobs({
MobsID: 45,
ResultID: ItemID.runeswamp,
Сhance: 0.5,
});

RuneRegistry.dropBlock({
	BlockID: 15,
	DropID: ItemID.runeswamp,
	Сhance: 0.4,
});

//rene ocean
RuneRegistry.dropMobs({
MobsID: 17,
ResultID: ItemID.runeocean,
Сhance: 0.5,
});

RuneRegistry.dropBlock({
	BlockID: 21,
	DropID: ItemID.runeocean,
	Сhance: 0.4,
});

//rune hell
RuneRegistry.dropMobs({
MobsID: 43,
ResultID: ItemID.runehell,
Сhance: 0.4,
});

RuneRegistry.dropMobs({
MobsID: 48,
ResultID: ItemID.runehell,
Сhance: 0.4,
});

RuneRegistry.dropMobs({
MobsID: 41,
ResultID: ItemID.runehell,
Сhance: 0.4,
});

RuneRegistry.dropMobs({
MobsID: 42,
ResultID: ItemID.runehell,
Сhance: 0.4,
});

RuneRegistry.dropBlock({
	BlockID: 87,
	DropID: ItemID.runehell,
	Сhance: 0.4,
});

//rune desert
RuneRegistry.dropMobs({
MobsID: 47,
ResultID: ItemID.runedesert,
Сhance: 0.4,
});

RuneRegistry.dropBlock({
	BlockID: 24,
	DropID: ItemID.runedesert,
	Сhance: 0.4,
});
}

if(__config__.access("Hard Mode") == false){
	//rune swamp
RuneRegistry.dropMobs({
MobsID: 45,
ResultID: ItemID.runeswamp,
Сhance: 0.9,
});

RuneRegistry.dropBlock({
	BlockID: 15,
	DropID: ItemID.runeswamp,
	Сhance: 0.7,
});

//rene ocean
RuneRegistry.dropMobs({
MobsID: 17,
ResultID: ItemID.runeocean,
Сhance: 0.9,
});

RuneRegistry.dropBlock({
	BlockID: 21,
	DropID: ItemID.runeocean,
	Сhance: 0.7,
});

//rune hell
RuneRegistry.dropMobs({
MobsID: 43,
ResultID: ItemID.runehell,
Сhance: 0.7,
});

RuneRegistry.dropMobs({
MobsID: 48,
ResultID: ItemID.runehell,
Сhance: 0.7,
});

RuneRegistry.dropMobs({
MobsID: 41,
ResultID: ItemID.runehell,
Сhance: 0.7,
});

RuneRegistry.dropMobs({
MobsID: 42,
ResultID: ItemID.runehell,
Сhance: 0.7,
});

RuneRegistry.dropBlock({
	BlockID: 87,
	DropID: ItemID.runehell,
	Сhance: 0.7,
});

//rune desert
RuneRegistry.dropMobs({
MobsID: 47,
ResultID: ItemID.runedesert,
Сhance: 0.7,
});

RuneRegistry.dropBlock({
	BlockID: 24,
	DropID: ItemID.runedesert,
	Сhance: 0.7,
});
}
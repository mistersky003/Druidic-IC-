var runeID = [ItemID.runeswamp, ItemID.runeocean, ItemID.runehell, ItemID.runedesert];

IDRegistry.genItemID("DruidicBackpack");
Item.createItem("DruidicBackpack", "Druidic Backpack", {name: "druidic_backpack", meta: 0}, {stack: 1});

BackpackRegistry.register(ItemID.DruidicBackpack, {
    slots: 55,
    slotsCenter: true,
    inRow: 10
});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.DruidicBackpack, count: 1, data: 0}, [
        "aaa",
        "cbc",
        "aaa"
    ], ['a', 334, 0, 'b', ItemID.druidology, 0, 'c', ItemID.runeswamp, 0,]);
	
	 Recipes.addShaped({id: ItemID.DruidicBackpack, count: 1, data: 0}, [
        "aaa",
        "cbc",
        "aaa"
    ], ['a', 334, 0, 'b', ItemID.druidology, 0, 'c', ItemID.runehell, 0,]);
	
	Recipes.addShaped({id: ItemID.DruidicBackpack, count: 1, data: 0}, [
        "aaa",
        "cbc",
        "aaa"
    ], ['a', 334, 0, 'b', ItemID.druidology, 0, 'c', ItemID.runeocean, 0,]);
	
	Recipes.addShaped({id: ItemID.DruidicBackpack, count: 1, data: 0}, [
        "aaa",
        "cbc",
        "aaa"
    ], ['a', 334, 0, 'b', ItemID.druidology, 0, 'c', ItemID.runedesert, 0,]);
});

/*
IDRegistry.genItemID("runeBag");
Item.createItem("runeBag", "Rune Bag", {name: "runebag", meta: 0}, {stack: 1});

BackpackRegistry.register(ItemID.runeBag, {
    slots: 20,
    slotsCenter: true,
    inRow: 10,
	 isValidItem: function (id, data, count) {
        return id === ItemID.runeswamp, ItemID.runeocean, ItemID.runehell, ItemID.runedesert;
    }
});*/
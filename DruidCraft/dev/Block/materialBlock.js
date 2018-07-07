var BLOCK_TYPE_MATERIALS = Block.createSpecialType({
	base: 4,
	destroytime: 5.1
});
IDRegistry.genBlockID("adamentiteBlock");
Block.createBlock("adamentiteBlock", [
	{name: "Block Adamentite", texture: [["adamentiteblock", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);

    Recipes.addShaped({id: BlockID.adamentiteBlock, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.ingotAdamantite, 0]);

IDRegistry.genBlockID("amethystBlock");
Block.createBlock("amethystBlock", [
	{name: "Block Amethyst", texture: [["amethystblock", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);

 Recipes.addShaped({id: BlockID.amethystBlock, count: 1, data: 0}, [
        "   ",
        "abc",
        "   "
    ], ['a', BlockID.adamentiteBlock, 0, 'b', BlockID.coboltBlock, 0, 'c', BlockID.silverBlock, 0]);
	
	IDRegistry.genBlockID("coboltBlock");
Block.createBlock("coboltBlock", [
	{name: "Block Cobolt", texture: [["coboltblock", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);
	
	Recipes.addShaped({id: BlockID.coboltBlock, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.ingotCobolt, 0]);
	
	IDRegistry.genBlockID("nephriteBlock");
Block.createBlock("nephriteBlock", [
	{name: "Block Nephrite", texture: [["nephriteblock", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);
	
	Recipes.addShaped({id: BlockID.nephriteBlock, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.nephrite, 0]);
	
	IDRegistry.genBlockID("rubyBlock");
Block.createBlock("rubyBlock", [
	{name: "Block Ruby", texture: [["rubyblock", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);
	
	Recipes.addShaped({id: BlockID.rubyBlock, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.ruby, 0]);
	
	IDRegistry.genBlockID("saphireBlock");
Block.createBlock("saphireBlock", [
	{name: "Block Saphire", texture: [["saphireblock", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);
	
	Recipes.addShaped({id: BlockID.saphireBlock, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.saphire, 0]);
	
	IDRegistry.genBlockID("silverBlock");
Block.createBlock("silverBlock", [
	{name: "Block Silver", texture: [["silverblock", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);
	
	Recipes.addShaped({id: BlockID.silverBlock, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.ingotSilver, 0]);
	
IDRegistry.genBlockID("trueadamantiteBlock");
Block.createBlock("trueadamantiteBlock", [
	{name: "Block Troadamantite", texture: [["trueadamantite_block", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);
	
	Recipes.addShaped({id: BlockID.trueadamantiteBlock, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.ingotTroadamantite, 0]);
	
	

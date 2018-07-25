IDRegistry.genBlockID("druidicAltar");
Block.createBlockWithRotation("druidicAltar", [
    {
        name: "Ritual Altar",
        texture: [["runealtar_side", 0], ["ringaltar", 0], ["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0]],
        inCreative: true
    }
]);

RenderHelper.setRitualAltarRender(BlockID.druidicAltar, true);

IDRegistry.genBlockID("druidicAltarController");
Block.createBlockWithRotation("druidicAltarController", [
    {
        name: "Ritual Controller",
        texture: [["runealtar_side", 0], ["ringaltar", 0], ["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0]],
        inCreative: true
    }
]);

RenderHelper.setRitualAltarControllerRender(BlockID.druidicAltarController, true);


Callback.addCallback("PostLoaded", function () {

    Recipes.addShaped({id: BlockID.druidicAltar, count: 1, data: 0}, [
        "aaa",
        "bbb",
        "bbb"
    ], ['a', 266, 0, 'b', 98, 0]);
	
	 Recipes.addShaped({id: BlockID.druidicAltarController, count: 1, data: 0}, [
        "   ",
        "bab",
        "bbb"
    ], ['a', 266, 0, 'b', 98, 0]);
	
});

//Entity.spawn(this.x, this.y, this.z, 93);




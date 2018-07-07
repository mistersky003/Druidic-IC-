var BLOCK_TYPE_RACK = Block.createSpecialType({
	base: 4,
	destroytime: 4.2
});
IDRegistry.genBlockID("windmillNapo");
Block.createBlockWithRotation("windmillNapo", [
    {
        name: "Windmill",
        texture: [["windmill_Intel", 0], ["windmill_Intel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0]],
        inCreative: true
    }
], BLOCK_TYPE_RACK);

Callback.addCallback("PostLoaded", function () {

    Recipes.addShaped({id: BlockID.windmillNapo, count: 1, data: 0}, [
        "cac",
        "aba",
        "cac"
    ], ['a', 265, 0, 'b', 152, 0, 'c', 4, 0]);
	
});

Block.setBlockShape(BlockID.windmillNapo, {x: 0, y: 0, z: 0}, {x: 1, y: 0.1, z: 1});



IDRegistry.genBlockID("cloneAltar");
Block.createBlockWithRotation("cloneAltar", [
    {
        name: "Clone Altar",
        texture: [["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0]],
        inCreative: true
    }
]);

RenderHelper.setRitualAltarRender(BlockID.cloneAltar, true);

/*Callback.addCallback("PostLoaded", function () {

    Recipes.addShaped({id: BlockID.CookingRack, count: 1, data: 0}, [
        "aba",
        " a ",
        "cdc"
    ], ['a', ItemID.BottleEmpty, 0, 'b', 280, 0, 'c', 264, 0, 'd', 379, 0]);
    
});*/
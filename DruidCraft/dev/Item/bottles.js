Block.setPrototype("souldsGlass", {
    type: Block.TYPE_BASE,
	 getVariations: function () {
        return [
            {
                name: "Soulds Glass",
                texture: [["soulsandglass", 0], ["soulsandglass", 0], ["soulsandglass", 0], ["soulsandglass", 0], ["soulsandglass", 0], ["soulsandglass", 0]],
                inCreative: true
            }
        ];
    },

getDrop: function () {
        return [];
    }
});
Recipes.addFurnace(88, BlockID.souldsGlass, 0); 

IDRegistry.genItemID("BottleEmpty");
Item.createItem("BottleEmpty", "Empty Bottle", {name: "soulsandbottle", meta: 0}, {isTech: false});

Callback.addCallback("PostLoaded", function () {

    Recipes.addShaped({id: ItemID.BottleEmpty, count: 2, data: 0}, [
        "a a",
        " a ",
        "   "
    ], ['a', BlockID.souldsGlass, 0]);

});

IDRegistry.genItemID("BottleSbaeris0");
Item.createItem("BottleSbaeris0", "Sbaeris Bottle", {name: "sbaeris", meta: 0}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbaeris0A");
Item.createItem("BottleSbaeris0A", "Sbaeris Bottle", {name: "sbaeris", meta: 0}, {stack: 1, isTech: true});
      
IDRegistry.genItemID("BottleSbaeris1");
Item.createItem("BottleSbaeris1", "Sbaeris Bottle", {name: "sbaeris", meta: 1}, {stack: 1, isTech: true});	  

IDRegistry.genItemID("BottleSbaeris1A");
Item.createItem("BottleSbaeris1A", "Sbaeris Bottle", {name: "sbaeris", meta: 1}, {stack: 1, isTech: true});	  
      	  
IDRegistry.genItemID("BottleSbaeris3");
Item.createItem("BottleSbaeris3", "Sbaeris Bottle", {name: "sbaeris", meta: 3}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbaeris3A");
Item.createItem("BottleSbaeris3A", "Sbaeris Bottle", {name: "sbaeris", meta: 3}, {stack: 1, isTech: true});
     
IDRegistry.genItemID("BottleSbaerisFull");
Item.createItem("BottleSbaerisFull", "Sbaeris Bottle", {name: "sbaeris", meta: 4}, {stack: 1, isTech: false});

IDRegistry.genItemID("BottleSbaerisFullA");
Item.createItem("BottleSbaerisFullA", "Sbaeris Bottle", {name: "sbaeris", meta: 4}, {stack: 1, isTech: true});


IDRegistry.genItemID("BottleSbterros0");
Item.createItem("BottleSbterros0", "Sbterros Bottle", {name: "sbterros", meta: 0}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbterros0A");
Item.createItem("BottleSbterros0A", "Sbterros Bottle", {name: "sbterros", meta: 0}, {stack: 1, isTech: true});
    
IDRegistry.genItemID("BottleSbterros1");
Item.createItem("BottleSbterros1", "Sbterros Bottle", {name: "sbterros", meta: 1}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbterros1A");
Item.createItem("BottleSbterros1A", "Sbterros Bottle", {name: "sbterros", meta: 1}, {stack: 1, isTech: true});
	
IDRegistry.genItemID("BottleSbterros2");
Item.createItem("BottleSbterros2", "Sbterros Bottle", {name: "sbterros", meta: 2}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbterros2A");
Item.createItem("BottleSbterros2A", "Sbterros Bottle", {name: "sbterros", meta: 2}, {stack: 1, isTech: true});
    
IDRegistry.genItemID("BottleSbterrosFull");
Item.createItem("BottleSbterrosFull", "Sbterros Bottle", {name: "sbterros", meta: 3}, {stack: 1, isTech: false});	

IDRegistry.genItemID("BottleSbterrosFullA");
Item.createItem("BottleSbterrosFullA", "Sbterros Bottle", {name: "sbterros", meta: 3}, {stack: 1, isTech: true});
	

IDRegistry.genItemID("BottleSbinfernos0");
Item.createItem("BottleSbinfernos0", "Sbinfernos Bottle", {name: "sbinfernos", meta: 0}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbinfernos0A");
Item.createItem("BottleSbinfernos0A", "Sbinfernos Bottle", {name: "sbinfernos", meta: 0}, {stack: 1, isTech: true});
    
IDRegistry.genItemID("BottleSbinfernos1");
Item.createItem("BottleSbinfernos1", "Sbinfernos Bottle", {name: "sbinfernos", meta: 1}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbinfernos1A");
Item.createItem("BottleSbinfernos1A", "Sbinfernos Bottle", {name: "sbinfernos", meta: 1}, {stack: 1, isTech: true});
	
IDRegistry.genItemID("BottleSbinfernos2");
Item.createItem("BottleSbinfernos2", "Sbinfernos Bottle", {name: "sbinfernos", meta: 2}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbinfernos2A");
Item.createItem("BottleSbinfernos2A", "Sbinfernos Bottle", {name: "sbinfernos", meta: 2}, {stack: 1, isTech: true});
    
IDRegistry.genItemID("BottleSbinfernosFull");
Item.createItem("BottleSbinfernosFull", "Sbinfernos Bottle", {name: "sbinfernos", meta: 3}, {stack: 1, isTech: false});

IDRegistry.genItemID("BottleSbinfernosFullA");
Item.createItem("BottleSbinfernosFullA", "Sbinfernos Bottle", {name: "sbinfernos", meta: 3}, {stack: 1, isTech: true});
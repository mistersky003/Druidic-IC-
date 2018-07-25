var BLOCK_TYPE_ALTAR = Block.createSpecialType({
	base: 4,
	destroytime: 5.2,
	lightlevel: 10.5
});
IDRegistry.genBlockID("altar");
Block.createBlockWithRotation("altar", [
    {
        name: "Rune Altar",
        texture: [["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0]],
        inCreative: true
    }
], BLOCK_TYPE_ALTAR);
RenderHelper.setAltarRender(BlockID.altar, true);

Callback.addCallback("PostLoaded", function () {
	
	 Recipes.addShaped({id: BlockID.altar, count: 1, data: 0}, [
        "aaa",
        "bcb",
        "bbb"
    ], ['a', 266, 0, 'b', 98, 0, 'c', 264, 0]);

});

var guiAltar = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Rune Altar"}},
         inventory: {standart: true},
        background: {
               bitmap: "runealtar_fon"
          }
    },

    drawing: [
    ],

    elements: {
		"slotSource1": {type: "slot", x: 630, y: 70, bitmap: "slot"},
		"slotSource2": {type: "slot", x: 530, y: 150, bitmap: "slot"},
		"slotSource3": {type: "slot", x: 430, y: 250, bitmap: "slot"},
		"slotSource4": {type: "slot", x: 530, y: 350, bitmap: "slot"},
		"slotSource5": {type: "slot", x: 730, y: 150, bitmap: "slot"},
		"slotSource6": {type: "slot", x: 830, y: 250, bitmap: "slot"},
		"slotSource7": {type: "slot", x: 730, y: 350, bitmap: "slot"},
		"slotSource8": {type: "slot", x: 630, y: 430, bitmap: "slot"},
		"slotResult": {type: "slot", x: 630, y: 250, bitmap: "slot"}
    }
});

TileEntity.registerPrototype(BlockID.altar, {
	defaultValues: {
		progress: 0
	},
	
	getGuiScreen: function () {
        return guiAltar;
    },
		
	
	init:function(){
		this.animationItem = new Animation.Item(this.x+.5, this.y+0.90, this.z+.5);
	},
	

   tick: function (){
	    var slotResult = this.container.getSlot("slotResult");
		
	   
	   if(World.getWorldTime()%2==0){
			if(slotResult.id > 0){
				this.animationItem.describeItem({
			id: slotResult.id,
			count: 1,
			data: slotResult.data,
			size: 0.5,
			rotation:[3.14/2, 0, 0]
		});
		this.animationItem.load();
			}else {
				this.animationItem.destroy();
			}
		}
	  
	   var slotSource1 = this.container.getSlot("slotSource1");
	    var slotSource2 = this.container.getSlot("slotSource2");
	    var slotSource3 = this.container.getSlot("slotSource3");
	    var slotSource4 = this.container.getSlot("slotSource4");
	    var slotSource5 = this.container.getSlot("slotSource5");
	    var slotSource6 = this.container.getSlot("slotSource6");
	    var slotSource7 = this.container.getSlot("slotSource7");
	    var slotSource8 = this.container.getSlot("slotSource8");
	    var slotResult = this.container.getSlot("slotResult");

		var input = [slotSource1, slotSource2, slotSource3, slotSource4, slotSource5, slotSource6, slotSource7, slotSource8];
		
        var output = RecipeRegistry.getAltarRecipe(input);
		
	   if (output){
		   this.data.progress++;
		   if (this.data.progress++ >= 21){
 slotSource1.count--;
 slotSource2.count--;
 slotSource3.count--;
 slotSource4.count--;
 slotSource5.count--;
 slotSource6.count--;
 slotSource7.count--;
 slotSource8.count--;
 
 slotSource2.id = output.backItem1.id;
 slotSource5.id = output.backItem2.id;
 slotSource2.data = output.backItem1.data;
 slotSource5.data = output.backItem2.data;
 slotSource2.count += output.backItem1.count;
 slotSource5.count += output.backItem2.count;
 
 slotResult.id = output.Result.id;
 slotResult.data = output.Result.data;
 slotResult.count += output.Result.count;
  this.data.progress = 0;
		   }
	 }  
	 this.container.validateAll();  
   }
});